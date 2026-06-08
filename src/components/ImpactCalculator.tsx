import { usePlatform } from '../context/PlatformContext';
import { useTranslation } from '../i18n';
import { motion } from 'framer-motion';

export function ImpactCalculator() {
  const { state, dispatch } = usePlatform();
  const { t } = useTranslation();

  const project = state.currentProject;

  if (!project) {
    return (
      <div className="clay-card" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
        <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🎛️</span>
        <p>{t('planner_no_ods_selected')}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'SET_TAB', payload: 'selection' })}
          className="clay-button clay-button-primary"
          style={{ marginTop: '16px' }}
        >
          {t('selection_manual')}
        </button>
      </div>
    );
  }

  const handleSliderChange = (name: 'budget' | 'beneficiaries' | 'duration' | 'teamSize' | 'riskLevel', value: number) => {
    dispatch({
      type: 'SET_INPUT',
      payload: { name, value }
    });
  };

  // SVG parameters for the circular gauge meter
  const strokeRadius = 50;
  const strokeCircumference = 2 * Math.PI * strokeRadius;
  const strokeOffset = strokeCircumference - (project.overallImpactScore / 100) * strokeCircumference;

  return (
    <section>
      <div className="page-header">
        <h2>{t('calculator_title')}</h2>
        <p>{t('calculator_subtitle')}</p>
      </div>

      <div className="grid-calc-2col">
        
        {/* LEFT PANEL: SIMULATION SLIDERS */}
        <div className="clay-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontSize: '20px', borderBottom: '1px solid var(--border-dark)', paddingBottom: '10px' }}>
            Parâmetros do Cenário
          </h3>

          {/* Slider 1: Beneficiaries */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <label htmlFor="input-beneficiaries">{t('calculator_input_beneficiaries')}</label>
              <span style={{ color: 'var(--accent-color)' }}>{state.inputs.beneficiaries}</span>
            </div>
            <input
              id="input-beneficiaries"
              type="range"
              min={50}
              max={5000}
              step={50}
              value={state.inputs.beneficiaries}
              onChange={(e: any) => handleSliderChange('beneficiaries', parseInt(e.target.value))}
              className="clay-range"
            />
          </div>

          {/* Slider 2: Budget */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <label htmlFor="input-budget">{t('calculator_input_budget')}</label>
              <span style={{ color: 'var(--accent-color)' }}>${state.inputs.budget.toLocaleString()}</span>
            </div>
            <input
              id="input-budget"
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={state.inputs.budget}
              onChange={(e: any) => handleSliderChange('budget', parseInt(e.target.value))}
              className="clay-range"
            />
          </div>

          {/* Slider 3: Duration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <label htmlFor="input-duration">{t('calculator_input_duration')}</label>
              <span style={{ color: 'var(--accent-color)' }}>{state.inputs.duration} Meses</span>
            </div>
            <input
              id="input-duration"
              type="range"
              min={3}
              max={36}
              step={1}
              value={state.inputs.duration}
              onChange={(e: any) => handleSliderChange('duration', parseInt(e.target.value))}
              className="clay-range"
            />
          </div>

          {/* Slider 4: Team size */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
              <label htmlFor="input-teamsize">{t('calculator_input_team')}</label>
              <span style={{ color: 'var(--accent-color)' }}>{state.inputs.teamSize} Colaboradores</span>
            </div>
            <input
              id="input-teamsize"
              type="range"
              min={1}
              max={25}
              step={1}
              value={state.inputs.teamSize}
              onChange={(e: any) => handleSliderChange('teamSize', parseInt(e.target.value))}
              className="clay-range"
            />
          </div>

          {/* Dropdown 5: Risk Level */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label htmlFor="input-risk" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)' }}>
              {t('calculator_input_risk')}
            </label>
            <select
              id="input-risk"
              value={state.inputs.riskLevel}
              onChange={(e: any) => handleSliderChange('riskLevel', parseFloat(e.target.value))}
              className="clay-input"
            >
              <option value={0.15}>{t('calculator_risk_low')}</option>
              <option value={0.45}>{t('calculator_risk_medium')}</option>
              <option value={0.75}>{t('calculator_risk_high')}</option>
            </select>
          </div>
        </div>

        {/* RIGHT PANEL: ANIMATED INDICATORS & EXPLANATIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Main Gauges Card */}
          <div className="clay-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.8fr', gap: '20px', alignItems: 'center' }}>
            {/* 1. Main radial impact gauge */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '120px', height: '120px' }}>
                <svg width="120" height="120" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="60" cy="60" r={strokeRadius} fill="transparent" stroke="var(--bg-tertiary)" strokeWidth="10" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r={strokeRadius}
                    fill="transparent"
                    stroke="var(--accent-color)"
                    strokeWidth="10"
                    strokeDasharray={strokeCircumference}
                    animate={{ strokeDashoffset: strokeOffset }}
                    transition={{ duration: 0.4 }}
                    strokeLinecap="round"
                  />
                </svg>
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '24px', fontWeight: 800 }}>{project.overallImpactScore}</span>
                  <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Index</span>
                </div>
              </div>
              <h4 style={{ fontSize: '13px', marginTop: '12px', fontWeight: 700 }}>
                {t('calculator_score_impact')}
              </h4>
            </div>

            {/* 2. Secondary scales */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Reach bar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700 }}>
                  <span>{t('calculator_score_reach')}</span>
                  <span>~{project.reachEstimated}</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, (project.reachEstimated / 5500) * 100)}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Sustainability scale */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700 }}>
                  <span>{t('calculator_score_sustainability')}</span>
                  <span>{project.sustainabilityIndex}/100</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: 'linear-gradient(90deg, #10b981, #10b981)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${project.sustainabilityIndex}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* SDG Alignment scale */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700 }}>
                  <span>{t('calculator_score_alignment')}</span>
                  <span>{project.alignmentScore}/100</span>
                </div>
                <div style={{ width: '100%', height: '8px', borderRadius: '4px', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                  <motion.div
                    style={{ height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${project.alignmentScore}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Explainability Breakdown Card */}
          <div className="clay-card">
            <h3 style={{ fontSize: '16px', marginBottom: '14px', borderBottom: '1px solid var(--border-dark)', paddingBottom: '6px' }}>
              {t('calculator_explain_title')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.scoreBreakdown.map((item: any, i: number) => {
                if (item.value === 0) return null;
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{item.name}</span>
                    <span style={{ fontWeight: 700, color: item.isPositive ? '#10b981' : '#ef4444' }}>
                      {item.value > 0 ? `+${item.value}` : item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tradeoffs List Warnings */}
          <div className="clay-card" style={{
            background: project.tradeoffs.length > 0 ? 'rgba(239,68,68,0.04)' : 'rgba(16,185,129,0.04)',
            border: project.tradeoffs.length > 0 ? '1px solid rgba(239,68,68,0.2)' : '1px solid rgba(16,185,129,0.2)'
          }}>
            <h3 style={{ fontSize: '16px', marginBottom: '14px', color: project.tradeoffs.length > 0 ? '#ef4444' : '#10b981', borderBottom: '1px solid var(--border-dark)', paddingBottom: '8px' }}>
              {t('calculator_tradeoffs_title')}
            </h3>
            {project.tradeoffs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.tradeoffs.map((tradeoff: string, i: number) => {
                  // Split on ". Recomendado:" / ". Recommended:" / ". Recomendado:"
                  const splitRx = /\. (Recomendado|Recommended|Recomendado):/;
                  const parts = tradeoff.split(splitRx);
                  const title = parts[0];
                  const rec   = parts.length >= 3 ? parts[2].trim() : null;
                  const recLabel = tradeoff.includes('Recommended') ? 'Recommended' : 'Recomendado';
                  return (
                    <div key={i} style={{
                      background: 'rgba(239,68,68,0.06)',
                      border: '1px solid rgba(239,68,68,0.18)',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                          <line x1="12" y1="9" x2="12" y2="13"/>
                          <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#ef4444', lineHeight: 1.4 }}>{title}</span>
                      </div>
                      {rec && (
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', paddingLeft: '22px' }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, marginTop: 1 }}>
                            <polyline points="9 11 12 14 22 4"/>
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                          </svg>
                          <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 600, lineHeight: 1.4 }}>
                            <strong>{recLabel}:</strong> {rec}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p style={{ fontSize: '12px', color: '#10b981', margin: 0, fontWeight: 600 }}>
                  {t('calculator_no_tradeoffs')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
export default ImpactCalculator;
