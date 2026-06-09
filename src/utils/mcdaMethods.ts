/**
 * Advanced Multicriteria Decision Analysis (MCDA) Methods
 * Implements AHP, TOPSIS, ELECTRE, and PROMETHEE algorithms
 */

export interface Alternative {
  id: string;
  name: string;
  criteria: Record<string, number>;
}

export interface Criterion {
  id: string;
  name: string;
  weight: number;
  direction: 'maximize' | 'minimize'; // higher is better or lower is better
}

export interface MCDAResult {
  ranking: Array<{ id: string; name: string; score: number; rank: number }>;
  scores: Map<string, number>;
  details?: any;
}

/**
 * Analytic Hierarchy Process (AHP)
 * Hierarchical decision-making with pairwise comparisons
 */
export function ahp(
  alternatives: Alternative[],
  criteria: Criterion[],
  comparisonMatrix?: Map<string, Map<string, number>>
): MCDAResult {
  // If no comparison matrix provided, use equal weights
  const weights = new Map<string, number>();
  let totalWeight = 0;
  
  if (comparisonMatrix) {
    // Calculate weights from comparison matrix using eigenvector method
    const normalizedMatrix = new Map<string, Map<string, number>>();
    
    criteria.forEach(c1 => {
      const row = new Map<string, number>();
      let rowSum = 0;
      
      criteria.forEach(c2 => {
        const value = comparisonMatrix.get(c1.id)?.get(c2.id) || 1;
        row.set(c2.id, value);
        rowSum += value;
      });
      
      // Normalize row
      criteria.forEach(c2 => {
        row.set(c2.id, row.get(c2.id)! / rowSum);
      });
      
      normalizedMatrix.set(c1.id, row);
    });
    
    // Calculate priority vector (average of each column)
    criteria.forEach(c1 => {
      let sum = 0;
      criteria.forEach(c2 => {
        sum += normalizedMatrix.get(c2.id)?.get(c1.id) || 0;
      });
      weights.set(c1.id, sum / criteria.length);
      totalWeight += sum / criteria.length;
    });
  } else {
    // Use provided weights
    criteria.forEach(c => {
      weights.set(c.id, c.weight);
      totalWeight += c.weight;
    });
  }
  
  // Normalize weights
  weights.forEach((weight, id) => {
    weights.set(id, weight / totalWeight);
  });
  
  // Calculate scores for each alternative
  const scores = new Map<string, number>();
  
  alternatives.forEach(alt => {
    let score = 0;
    
    criteria.forEach(criterion => {
      const value = alt.criteria[criterion.id] || 0;
      const weight = weights.get(criterion.id) || 0;
      
      // Normalize criterion values
      const normalizedValue = normalizeValue(value, criterion, alternatives);
      score += normalizedValue * weight;
    });
    
    scores.set(alt.id, score);
  });
  
  // Rank alternatives
  const ranking = Array.from(scores.entries())
    .map(([id, score]) => ({
      id,
      name: alternatives.find(a => a.id === id)?.name || id,
      score,
      rank: 0
    }))
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  
  return {
    ranking,
    scores,
    details: {
      criteriaWeights: weights,
      comparisonMatrix
    }
  };
}

/**
 * TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)
 * Ranks alternatives based on distance to ideal and anti-ideal solutions
 */
export function topsis(
  alternatives: Alternative[],
  criteria: Criterion[]
): MCDAResult {
  const m = alternatives.length;
  
  // Normalize decision matrix
  const normalizedMatrix: number[][] = [];
  
  for (let i = 0; i < m; i++) {
    normalizedMatrix[i] = [];
    for (let j = 0; j < criteria.length; j++) {
      const criterion = criteria[j];
      const value = alternatives[i].criteria[criterion.id] || 0;
      
      // Calculate column sum of squares
      let sumSquares = 0;
      for (let k = 0; k < m; k++) {
        const val = alternatives[k].criteria[criterion.id] || 0;
        sumSquares += val * val;
      }
      
      const normalized = sumSquares > 0 ? value / Math.sqrt(sumSquares) : 0;
      normalizedMatrix[i][j] = normalized;
    }
  }
  
  // Apply weights
  const weightedMatrix: number[][] = [];
  for (let i = 0; i < m; i++) {
    weightedMatrix[i] = [];
    for (let j = 0; j < criteria.length; j++) {
      weightedMatrix[i][j] = normalizedMatrix[i][j] * criteria[j].weight;
    }
  }
  
  // Determine ideal and anti-ideal solutions
  const idealSolution: number[] = [];
  const antiIdealSolution: number[] = [];
  
  for (let j = 0; j < criteria.length; j++) {
    const column = weightedMatrix.map(row => row[j]);
    const direction = criteria[j].direction;
    
    if (direction === 'maximize') {
      idealSolution[j] = Math.max(...column);
      antiIdealSolution[j] = Math.min(...column);
    } else {
      idealSolution[j] = Math.min(...column);
      antiIdealSolution[j] = Math.max(...column);
    }
  }
  
  // Calculate distances to ideal and anti-ideal
  const distancesToIdeal: number[] = [];
  const distancesToAntiIdeal: number[] = [];
  
  for (let i = 0; i < m; i++) {
    let distIdeal = 0;
    let distAntiIdeal = 0;
    
    for (let j = 0; j < criteria.length; j++) {
      distIdeal += Math.pow(weightedMatrix[i][j] - idealSolution[j], 2);
      distAntiIdeal += Math.pow(weightedMatrix[i][j] - antiIdealSolution[j], 2);
    }
    
    distancesToIdeal[i] = Math.sqrt(distIdeal);
    distancesToAntiIdeal[i] = Math.sqrt(distAntiIdeal);
  }
  
  // Calculate relative closeness to ideal solution
  const scores = new Map<string, number>();
  
  alternatives.forEach((alt, i) => {
    const totalDist = distancesToIdeal[i] + distancesToAntiIdeal[i];
    const closeness = totalDist > 0 ? distancesToAntiIdeal[i] / totalDist : 0;
    scores.set(alt.id, closeness);
  });
  
  // Rank alternatives
  const ranking = Array.from(scores.entries())
    .map(([id, score]) => ({
      id,
      name: alternatives.find(a => a.id === id)?.name || id,
      score,
      rank: 0
    }))
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  
  return {
    ranking,
    scores,
    details: {
      idealSolution,
      antiIdealSolution,
      distancesToIdeal,
      distancesToAntiIdeal
    }
  };
}

/**
 * ELECTRE (Elimination and Choice Translating Reality)
 * Outranking method based on concordance and discordance
 */
export function electre(
  alternatives: Alternative[],
  criteria: Criterion[],
  concordanceThreshold: number = 0.7,
  discordanceThreshold: number = 0.3
): MCDAResult {
  const m = alternatives.length;
  
  // Calculate concordance matrix
  const concordanceMatrix: number[][] = [];
  const discordanceMatrix: number[][] = [];
  
  for (let i = 0; i < m; i++) {
    concordanceMatrix[i] = [];
    discordanceMatrix[i] = [];
    
    for (let j = 0; j < m; j++) {
      if (i === j) {
        concordanceMatrix[i][j] = 1;
        discordanceMatrix[i][j] = 0;
        continue;
      }
      
      let concordanceSum = 0;
      let discordanceMax = 0;
      let totalWeight = 0;
      
      criteria.forEach(criterion => {
        const valueI = alternatives[i].criteria[criterion.id] || 0;
        const valueJ = alternatives[j].criteria[criterion.id] || 0;
        const weight = criterion.weight;
        
        totalWeight += weight;
        
        // Concordance: i is at least as good as j
        if (criterion.direction === 'maximize' && valueI >= valueJ) {
          concordanceSum += weight;
        } else if (criterion.direction === 'minimize' && valueI <= valueJ) {
          concordanceSum += weight;
        }
        
        // Discordance: maximum difference where j is better than i
        let diff = 0;
        if (criterion.direction === 'maximize' && valueJ > valueI) {
          diff = valueJ - valueI;
        } else if (criterion.direction === 'minimize' && valueI > valueJ) {
          diff = valueI - valueJ;
        }
        
        // Normalize difference by max possible difference
        const maxDiff = Math.max(
          ...alternatives.map(a => a.criteria[criterion.id] || 0)
        ) - Math.min(
          ...alternatives.map(a => a.criteria[criterion.id] || 0)
        );
        
        const normalizedDiff = maxDiff > 0 ? diff / maxDiff : 0;
        discordanceMax = Math.max(discordanceMax, normalizedDiff);
      });
      
      concordanceMatrix[i][j] = totalWeight > 0 ? concordanceSum / totalWeight : 0;
      discordanceMatrix[i][j] = discordanceMax;
    }
  }
  
  // Calculate net outranking scores
  const scores = new Map<string, number>();
  
  alternatives.forEach((alt, i) => {
    let netScore = 0;
    
    alternatives.forEach((_, j) => {
      if (i !== j) {
        // i outranks j if concordance is high and discordance is low
        if (concordanceMatrix[i][j] >= concordanceThreshold && 
            discordanceMatrix[i][j] <= discordanceThreshold) {
          netScore += 1;
        }
        
        // j outranks i
        if (concordanceMatrix[j][i] >= concordanceThreshold && 
            discordanceMatrix[j][i] <= discordanceThreshold) {
          netScore -= 1;
        }
      }
    });
    
    scores.set(alt.id, netScore);
  });
  
  // Rank alternatives
  const ranking = Array.from(scores.entries())
    .map(([id, score]) => ({
      id,
      name: alternatives.find(a => a.id === id)?.name || id,
      score,
      rank: 0
    }))
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  
  return {
    ranking,
    scores,
    details: {
      concordanceMatrix,
      discordanceMatrix,
      concordanceThreshold,
      discordanceThreshold
    }
  };
}

/**
 * PROMETHEE (Preference Ranking Organization Method for Enrichment Evaluations)
 * Outranking method using preference functions
 */
export function promethee(
  alternatives: Alternative[],
  criteria: Criterion[],
  preferenceType: 'usual' | 'quasi' | 'linear' | 'level' | 'v-shape' = 'linear'
): MCDAResult {
  const m = alternatives.length;
  
  // Calculate preference matrix
  const preferenceMatrix: number[][] = [];
  
  for (let i = 0; i < m; i++) {
    preferenceMatrix[i] = [];
    
    for (let j = 0; j < m; j++) {
      if (i === j) {
        preferenceMatrix[i][j] = 0;
        continue;
      }
      
      let totalPreference = 0;
      
      criteria.forEach(criterion => {
        const valueI = alternatives[i].criteria[criterion.id] || 0;
        const valueJ = alternatives[j].criteria[criterion.id] || 0;
        const weight = criterion.weight;
        const direction = criterion.direction;
        
        let diff = 0;
        if (direction === 'maximize') {
          diff = valueI - valueJ;
        } else {
          diff = valueJ - valueI;
        }
        
        // Calculate preference based on type
        let preference = 0;
        
        switch (preferenceType) {
          case 'usual':
            preference = diff > 0 ? 1 : 0;
            break;
          case 'quasi':
            const q = 0.1; // indifference threshold
            preference = diff > q ? 1 : 0;
            break;
          case 'linear':
            const p = 0.5; // preference threshold
            preference = diff > 0 ? Math.min(diff / p, 1) : 0;
            break;
          case 'level':
            const s = 0.3; // indifference threshold
            const p2 = 0.6; // preference threshold
            if (diff <= s) {
              preference = 0;
            } else if (diff <= p2) {
              preference = 0.5;
            } else {
              preference = 1;
            }
            break;
          case 'v-shape':
            const p3 = 0.5; // preference threshold
            preference = diff > 0 ? Math.min(diff / p3, 1) : 0;
            break;
        }
        
        totalPreference += preference * weight;
      });
      
      preferenceMatrix[i][j] = totalPreference;
    }
  }
  
  // Calculate positive and negative flows
  const positiveFlows: number[] = [];
  const negativeFlows: number[] = [];
  
  for (let i = 0; i < m; i++) {
    let positiveFlow = 0;
    let negativeFlow = 0;
    
    for (let j = 0; j < m; j++) {
      if (i !== j) {
        positiveFlow += preferenceMatrix[i][j];
        negativeFlow += preferenceMatrix[j][i];
      }
    }
    
    positiveFlows[i] = positiveFlow / (m - 1);
    negativeFlows[i] = negativeFlow / (m - 1);
  }
  
  // Calculate net flows
  const scores = new Map<string, number>();
  
  alternatives.forEach((alt, i) => {
    const netFlow = positiveFlows[i] - negativeFlows[i];
    scores.set(alt.id, netFlow);
  });
  
  // Rank alternatives
  const ranking = Array.from(scores.entries())
    .map(([id, score]) => ({
      id,
      name: alternatives.find(a => a.id === id)?.name || id,
      score,
      rank: 0
    }))
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  
  return {
    ranking,
    scores,
    details: {
      preferenceMatrix,
      positiveFlows,
      negativeFlows,
      preferenceType
    }
  };
}

/**
 * Helper function to normalize criterion values
 */
function normalizeValue(
  value: number,
  criterion: Criterion,
  alternatives: Alternative[]
): number {
  const values = alternatives.map(a => a.criteria[criterion.id] || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  
  if (range === 0) return 0.5;
  
  if (criterion.direction === 'maximize') {
    return (value - min) / range;
  } else {
    return (max - value) / range;
  }
}

/**
 * Sensitivity Analysis for MCDA methods
 * Tests how changes in weights affect rankings
 */
export function sensitivityAnalysis(
  alternatives: Alternative[],
  criteria: Criterion[],
  method: 'ahp' | 'topsis' | 'electre' | 'promethee',
  weightVariation: number = 0.1
): Array<{ criterion: string; weightChange: number; rankingChange: number }> {
  const originalResult = runMCDA(alternatives, criteria, method);
  const originalRanking = new Map(originalResult.ranking.map(r => [r.id, r.rank]));
  
  const results: Array<{ criterion: string; weightChange: number; rankingChange: number }> = [];
  
  criteria.forEach(criterion => {
    // Increase weight
    const increasedCriteria = criteria.map(c => ({
      ...c,
      weight: c.id === criterion.id ? c.weight * (1 + weightVariation) : c.weight * (1 - weightVariation / (criteria.length - 1))
    }));
    
    const increasedResult = runMCDA(alternatives, increasedCriteria, method);
    const increasedRanking = new Map(increasedResult.ranking.map(r => [r.id, r.rank]));
    
    // Calculate ranking change (sum of absolute rank differences)
    let rankChange = 0;
    originalRanking.forEach((originalRank, id) => {
      const newRank = increasedRanking.get(id) || originalRank;
      rankChange += Math.abs(originalRank - newRank);
    });
    
    results.push({
      criterion: criterion.name,
      weightChange: weightVariation,
      rankingChange: rankChange
    });
  });
  
  return results.sort((a, b) => b.rankingChange - a.rankingChange);
}

/**
 * Run specified MCDA method
 */
function runMCDA(
  alternatives: Alternative[],
  criteria: Criterion[],
  method: 'ahp' | 'topsis' | 'electre' | 'promethee'
): MCDAResult {
  switch (method) {
    case 'ahp':
      return ahp(alternatives, criteria);
    case 'topsis':
      return topsis(alternatives, criteria);
    case 'electre':
      return electre(alternatives, criteria);
    case 'promethee':
      return promethee(alternatives, criteria);
    default:
      return topsis(alternatives, criteria);
  }
}

/**
 * Consensus ranking using multiple MCDA methods
 * Combines rankings from different methods using Borda count
 */
export function consensusRanking(
  alternatives: Alternative[],
  criteria: Criterion[]
): MCDAResult {
  const methods: Array<'ahp' | 'topsis' | 'electre' | 'promethee'> = ['ahp', 'topsis', 'electre', 'promethee'];
  
  const bordaScores = new Map<string, number>();
  
  alternatives.forEach(alt => bordaScores.set(alt.id, 0));
  
  methods.forEach(method => {
    const result = runMCDA(alternatives, criteria, method);
    const m = alternatives.length;
    
    result.ranking.forEach(ranked => {
      const currentScore = bordaScores.get(ranked.id) || 0;
      // Borda count: m - rank (higher rank = higher score)
      bordaScores.set(ranked.id, currentScore + (m - ranked.rank));
    });
  });
  
  // Normalize scores
  const maxScore = Math.max(...Array.from(bordaScores.values()));
  bordaScores.forEach((score, id) => {
    bordaScores.set(id, maxScore > 0 ? score / maxScore : 0);
  });
  
  // Rank alternatives
  const ranking = Array.from(bordaScores.entries())
    .map(([id, score]) => ({
      id,
      name: alternatives.find(a => a.id === id)?.name || id,
      score,
      rank: 0
    }))
    .sort((a, b) => b.score - a.score)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  
  return {
    ranking,
    scores: bordaScores,
    details: {
      methods,
      individualResults: methods.map(method => runMCDA(alternatives, criteria, method))
    }
  };
}
