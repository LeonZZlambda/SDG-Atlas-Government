import React, { useEffect, useRef, useState } from 'react';
import { getCoefficient, SDG_METADATA } from '../utils/projectGenerator';
import { 
  calculateDegreeCentrality, 
  calculateBetweennessCentrality, 
  calculatePageRank,
  getGraphStatistics,
  type Graph,
  type GraphNode,
  type GraphEdge 
} from '../utils/graphAlgorithms';

interface ODSCausalGraphProps {
  selectedSDGs: number[];
  onNodeClick?: (sdgId: number) => void;
}

export function ODSCausalGraph({ selectedSDGs, onNodeClick }: ODSCausalGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [graphStats, setGraphStats] = useState<any>(null);

  // Build graph from selected SDGs
  const buildGraph = (): Graph => {
    const nodes: GraphNode[] = selectedSDGs.map(id => ({
      id,
      label: SDG_METADATA.find(s => s.id === id)?.name.en || `SDG ${id}`,
      weight: 1
    }));

    const edges: GraphEdge[] = [];
    for (let i = 0; i < selectedSDGs.length; i++) {
      for (let j = i + 1; j < selectedSDGs.length; j++) {
        const coeff = getCoefficient(selectedSDGs[i], selectedSDGs[j]);
        if (Math.abs(coeff) > 0.1) {
          edges.push({
            from: selectedSDGs[i],
            to: selectedSDGs[j],
            weight: coeff
          });
        }
      }
    }

    return { nodes, edges };
  };

  // Calculate node positions using force-directed layout
  const calculatePositions = (graph: Graph): Map<number, { x: number; y: number }> => {
    const positions = new Map<number, { x: number; y: number }>();
    const n = graph.nodes.length;
    const centerX = 400;
    const centerY = 300;
    const radius = 200;

    // Circular layout for initial positions
    graph.nodes.forEach((node, i) => {
      const angle = (2 * Math.PI * i) / n;
      positions.set(node.id, {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle)
      });
    });

    return positions;
  };

  useEffect(() => {
    if (selectedSDGs.length === 0) return;

    const graph = buildGraph();
    const stats = getGraphStatistics(graph);
    setGraphStats(stats);
  }, [selectedSDGs]);

  const graph = buildGraph();
  const positions = calculatePositions(graph);
  const degreeCentrality = calculateDegreeCentrality(graph);
  const pageRank = calculatePageRank(graph);

  return (
    <div className="clay-card" style={{ padding: '24px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>
          ODS Causal Graph
        </h3>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Real-time weighted graph analysis with directional effects
        </p>
      </div>

      {/* Graph Statistics */}
      {graphStats && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '12px', 
          marginBottom: '20px',
          padding: '16px',
          background: 'var(--bg-glass)',
          borderRadius: '12px'
        }}>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Nodes
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-color)' }}>
              {graphStats.nodeCount}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Edges
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-color)' }}>
              {graphStats.edgeCount}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Density
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-color)' }}>
              {(graphStats.density * 100).toFixed(1)}%
            </div>
          </div>
          <div>
            <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '4px' }}>
              Communities
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-color)' }}>
              {graphStats.communityCount}
            </div>
          </div>
        </div>
      )}

      {/* SVG Graph */}
      <svg 
        ref={svgRef}
        width="800" 
        height="600" 
        style={{ 
          background: 'var(--bg-glass)',
          borderRadius: '12px',
          border: '1px solid var(--border-dark)'
        }}
      >
        <defs>
          {/* Arrow markers for directional edges */}
          <marker
            id="arrow-positive"
            markerWidth="10"
            markerHeight="10"
            refX="20"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
          <marker
            id="arrow-negative"
            markerWidth="10"
            markerHeight="10"
            refX="20"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
          </marker>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {graph.edges.map((edge, i) => {
          const from = positions.get(edge.from);
          const to = positions.get(edge.to);
          if (!from || !to) return null;

          const isHovered = hoveredNode === edge.from || hoveredNode === edge.to;
          const isPositive = edge.weight > 0;
          const strokeWidth = Math.abs(edge.weight) * 8;
          const opacity = isHovered ? 1 : 0.6;

          return (
            <g key={i}>
              {/* Edge line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isPositive ? '#10b981' : '#ef4444'}
                strokeWidth={strokeWidth}
                opacity={opacity}
                markerEnd={isPositive ? 'url(#arrow-positive)' : 'url(#arrow-negative)'}
                style={{ transition: 'all 0.3s ease' }}
              />
              
              {/* Weight label */}
              <text
                x={(from.x + to.x) / 2}
                y={(from.y + to.y) / 2 - 10}
                fontSize="10"
                fill={isPositive ? '#10b981' : '#ef4444'}
                fontWeight="600"
                textAnchor="middle"
                opacity={isHovered ? 1 : 0.8}
                style={{ 
                  background: 'var(--bg-glass)',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}
              >
                {edge.weight > 0 ? '+' : ''}{edge.weight.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* Nodes */}
        {graph.nodes.map((node) => {
          const pos = positions.get(node.id);
          if (!pos) return null;

          const sdg = SDG_METADATA.find(s => s.id === node.id);
          const isHovered = hoveredNode === node.id;
          const centrality = degreeCentrality.get(node.id) || 0;
          const pr = pageRank.get(node.id) || 0;
          const radius = 25 + centrality * 30;

          return (
            <g
              key={node.id}
              onClick={() => onNodeClick?.(node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Glow effect on hover */}
              {isHovered && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={radius + 10}
                  fill={sdg?.color || '#666'}
                  opacity={0.3}
                  filter="url(#glow)"
                />
              )}

              {/* Node circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r={radius}
                fill={sdg?.color || '#666'}
                stroke={isHovered ? '#fff' : 'none'}
                strokeWidth={isHovered ? 3 : 0}
                style={{ transition: 'all 0.3s ease' }}
              />

              {/* SDG number */}
              <text
                x={pos.x}
                y={pos.y}
                fontSize="14"
                fontWeight="700"
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {node.id}
              </text>

              {/* Centrality indicator */}
              {isHovered && (
                <g transform={`translate(${pos.x + radius + 15}, ${pos.y})`}>
                  <rect
                    x={-10}
                    y={-30}
                    width={100}
                    height={60}
                    fill="var(--bg-glass)"
                    stroke="var(--border-dark)"
                    rx="8"
                    opacity={0.95}
                  />
                  <text x={0} y={-15} fontSize="10" fill="var(--text-muted)">
                    Degree: {centrality.toFixed(3)}
                  </text>
                  <text x={0} y={0} fontSize="10" fill="var(--text-muted)">
                    PageRank: {pr.toFixed(4)}
                  </text>
                  <text x={0} y={15} fontSize="10" fill="var(--text-muted)">
                    {sdg?.name.en?.split(' ').slice(0, 2).join(' ')}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div style={{ 
        marginTop: '16px', 
        display: 'flex', 
        gap: '24px', 
        fontSize: '12px',
        padding: '12px',
        background: 'var(--bg-glass)',
        borderRadius: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '4px', background: '#10b981', borderRadius: '2px' }} />
          <span>Positive Synergy</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '4px', background: '#ef4444', borderRadius: '2px' }} />
          <span>Negative Trade-off</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-color)' }} />
          <span>Node Size = Centrality</span>
        </div>
      </div>
    </div>
  );
}
