import { usePlatform } from '../context/PlatformContext';
import { useTranslation } from '../i18n';
import { SDG_METADATA } from '../utils/projectGenerator';
import { ODSCard } from './ODSCard';
import { motion } from 'framer-motion';

export function ODSGrid() {
  const { state, dispatch } = usePlatform();
  const { t } = useTranslation();
  const langKey = state.language.split('-')[0] as 'pt' | 'en' | 'es';

  const toggleSelect = (id: number) => {
    dispatch({ type: 'TOGGLE_ODS', payload: id });
  };

  const selectAll = () => {
    const allIds = Array.from({ length: 17 }, (_, i) => i + 1);
    dispatch({ type: 'SET_ODS_BULK', payload: allIds });
    dispatch({ type: 'ADD_TOAST', payload: { message: t('selection_all_btn'), type: 'info' } });
  };

  const clearSelection = () => {
    dispatch({ type: 'SET_ODS_BULK', payload: [] });
    dispatch({ type: 'ADD_TOAST', payload: { message: t('toast_selection_cleared'), type: 'info' } });
  };

  const randomizeSelection = () => {
    // Select between 3 and 7 random SDGs
    const randomCount = Math.floor(Math.random() * 5) + 3;
    const shuffled = Array.from({ length: 17 }, (_, i) => i + 1)
      .sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, randomCount);
    dispatch({ type: 'SET_ODS_BULK', payload: selected });
    dispatch({
      type: 'ADD_TOAST',
      payload: { message: `${t('selection_random_btn')}: ${selected.length} ODS`, type: 'success' }
    });
  };

  const handleNext = () => {
    if (state.selectedOds.length === 0) {
      dispatch({ type: 'ADD_TOAST', payload: { message: t('selection_count_warning'), type: 'warning' } });
    } else {
      dispatch({ type: 'SET_TAB', payload: 'shuffler' });
    }
  };

  return (
    <section>
      <div className="page-header">
        <h2>{t('selection_title')}</h2>
        <p>{t('selection_subtitle')}</p>
      </div>

      {/* Control Buttons Panel */}
      <div className="clay-card" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
        padding: '16px 24px'
      }}>
        {/* Statistics count indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            background: 'var(--accent-color)',
            color: '#fff',
            padding: '4px 12px',
            borderRadius: '12px',
            fontWeight: 800,
            fontSize: 'clamp(12px, 1.4vw, 14px)',
            boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.1)'
          }}>
            {state.selectedOds.length}
          </span>
          <span style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', fontWeight: 600, color: 'var(--text-secondary)' }}>
            ODS Selecionados (Max 17)
          </span>
        </div>

        {/* Buttons list */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button type="button" onClick={selectAll} className="clay-button" style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', padding: '8px 14px' }}>
            {t('selection_all_btn')}
          </button>
          <button type="button" onClick={clearSelection} className="clay-button" style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', padding: '8px 14px' }}>
            {t('selection_clear_btn')}
          </button>
          <button type="button" onClick={randomizeSelection} className="clay-button" style={{ fontSize: 'clamp(11px, 1.2vw, 13px)', padding: '8px 14px' }}>
            🎲 {t('selection_random_btn')}
          </button>
        </div>
      </div>

      {/* Grid displays SDGs */}
      <motion.div layout className="ods-grid">
        {SDG_METADATA.map(ods => (
          <ODSCard
            key={ods.id}
            id={ods.id}
            name={ods.name[langKey]}
            shortDesc={ods.shortDescription[langKey]}
            color={ods.color}
            isSelected={state.selectedOds.includes(ods.id)}
            onToggle={() => toggleSelect(ods.id)}
          />
        ))}
      </motion.div>

      {/* Proceed Navigation Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
        {state.selectedOds.length > 0 && (
          <button
            type="button"
            onClick={() => dispatch({ type: 'SET_TAB', payload: 'planner' })}
            className="clay-button"
            style={{ padding: '12px 24px', fontSize: '14px' }}
          >
            {t('selection_next_planner')} →
          </button>
        )}
        
        <button
          type="button"
          onClick={handleNext}
          className="clay-button clay-button-primary"
          style={{ padding: '12px 28px', fontSize: '14px' }}
        >
          {t('selection_next_shuffler')} →
        </button>
      </div>

      <style>{`
        @media (max-width: 400px) {
          section > div[style*="justify-content: flex-end"] {
            flex-direction: column;
            align-items: stretch;
          }
          section > div[style*="justify-content: flex-end"] button {
            width: 100%;
            padding: 10px 16px !important;
            font-size: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}
