// src/utils/scoring.ts

// Utility functions for transparent Impact and Sustainability scoring.
// No direct imports from graphAlgorithms are needed here; the required metrics are
// passed via the GraphStats interface.

/**
 * Types for the statistics object returned by the extended getGraphStatistics.
 * All metrics are stored in Maps keyed by ODS node id.
 */
export interface GraphStats {
  degreeCentrality: Map<number, number>;
  betweennessCentrality: Map<number, number>;
  positiveInfluence: Map<number, number>;
  // Optional sustainability metrics – will be populated later
  lowConflictRatio?: Map<number, number>;
  networkResilience?: Map<number, number>;
  feasibility?: Map<number, number>;
}

/**
 * Calculate Impact Score for a given node using the formula:
 *   Impact = 0.5 × Positive Influence + 0.3 × Degree Centrality + 0.2 × Betweenness Centrality
 */
export function calculateImpactScore(
  nodeId: number,
  stats: GraphStats
): { score: number; breakdown: Record<string, number> } {
  const posInf = stats.positiveInfluence.get(nodeId) ?? 0;
  const deg = stats.degreeCentrality.get(nodeId) ?? 0;
  const btw = stats.betweennessCentrality.get(nodeId) ?? 0;

  const score = 0.5 * posInf + 0.3 * deg + 0.2 * btw;

  const breakdown = {
    positiveInfluence: posInf,
    degreeCentrality: deg,
    betweennessCentrality: btw,
  };

  return { score, breakdown };
}

/**
 * Calculate Sustainability Score for a given node using the formula:
 *   Sustainability = 0.5 × Low Conflict Ratio + 0.3 × Network Resilience + 0.2 × Feasibility
 */
export function calculateSustainabilityScore(
  nodeId: number,
  stats: GraphStats
): { score: number; breakdown: Record<string, number> } {
  const lcr = stats.lowConflictRatio?.get(nodeId) ?? 0;
  const res = stats.networkResilience?.get(nodeId) ?? 0;
  const feas = stats.feasibility?.get(nodeId) ?? 0;

  const score = 0.5 * lcr + 0.3 * res + 0.2 * feas;

  const breakdown = {
    lowConflictRatio: lcr,
    networkResilience: res,
    feasibility: feas,
  };

  return { score, breakdown };
}

/**
 * Helper to format a score breakdown for UI components.
 */
export function formatScoreBreakdown(
  scoreData: Record<string, number>
): { label: string; value: number }[] {
  return Object.entries(scoreData).map(([label, value]) => ({ label, value }));
}
