import { motion } from 'framer-motion';
import { getSDGIcon } from './ODSIcons';

interface ODSCardProps {
  id: number;
  name: string;
  shortDesc: string;
  color: string;
  isSelected: boolean;
  onToggle: () => void;
}

export function ODSCard({ id, name, shortDesc, color, isSelected, onToggle }: ODSCardProps) {
  // Keypress handler for keyboard accessibility (space/enter to toggle checkbox)
  const handleKeyDown = (e: any) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <motion.div
      tabIndex={0}
      role="checkbox"
      aria-checked={isSelected}
      aria-label={`SDG ${id}: ${name}`}
      onKeyDown={handleKeyDown}
      onClick={onToggle}
      className={`clay-card clay-card-hover ods-card`}
      style={{
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: isSelected ? color : 'var(--bg-glass)',
        color: isSelected ? '#ffffff' : 'var(--text-primary)',
        borderColor: isSelected ? 'rgba(255, 255, 255, 0.4)' : 'var(--border-color)',
        boxShadow: isSelected
          ? `0 10px 20px ${color}40, inset -4px -4px 8px rgba(0,0,0,0.2), inset 4px 4px 8px rgba(255,255,255,0.25)`
          : 'var(--clay-card-shadow)',
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Número decorativo — ancorado no canto inferior direito do card */}
      <span style={{
        position: 'absolute',
        bottom: '-8px',
        right: '-4px',
        fontSize: '72px',
        fontWeight: 900,
        opacity: isSelected ? 0.12 : 0.05,
        fontFamily: 'var(--font-heading)',
        userSelect: 'none',
        pointerEvents: 'none',
        color: 'inherit',
        lineHeight: 1,
      }}>
        {id}
      </span>

      {/* Header: ícone + indicador de seleção — sempre no topo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: isSelected ? 'rgba(255,255,255,0.2)' : `${color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7px',
          flexShrink: 0,
          boxShadow: isSelected ? 'inset -1px -1px 3px rgba(0,0,0,0.1)' : 'none',
        }}>
          {getSDGIcon(id, '', isSelected ? '#ffffff' : color)}
        </div>

        <div style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          flexShrink: 0,
          marginTop: '4px',
          background: isSelected ? '#ffffff' : color,
          border: isSelected ? 'none' : '2px solid var(--border-color)',
          boxShadow: isSelected ? '0 0 6px rgba(255,255,255,0.8)' : 'none',
        }} />
      </div>

      {/* Body: título + descrição — sempre logo abaixo do header */}
      <div style={{ zIndex: 1 }}>
        <h3 style={{
          fontSize: '13px',
          margin: '0 0 5px 0',
          fontWeight: 800,
          lineHeight: 1.3,
          fontFamily: 'var(--font-heading)',
          color: 'inherit',
        }}>
          {id}. {name}
        </h3>
        <p style={{
          fontSize: '11px',
          margin: 0,
          lineHeight: 1.4,
          color: isSelected ? 'rgba(255,255,255,0.82)' : 'var(--text-secondary)',
        }}>
          {shortDesc}
        </p>
      </div>
    </motion.div>
  );
}
