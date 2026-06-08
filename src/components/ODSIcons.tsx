export function getSDGIcon(id: number, className = '', color = 'currentColor') {
  const props = {
    className,
    width: '100%',
    height: '100%',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth: '2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  };

  switch (id) {
    case 1: // No Poverty
      return (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <path d="M12 5v4" />
        </svg>
      );
    case 2: // Zero Hunger
      return (
        <svg {...props}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          <path d="M12 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-3 3" />
        </svg>
      );
    case 3: // Good Health
      return (
        <svg {...props}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      );
    case 4: // Quality Education
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 5: // Gender Equality
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="5" />
          <path d="M12 13v9M9 18h6" />
          <line x1="16" y1="12" x2="21" y2="17" />
          <line x1="21" y1="12" x2="16" y2="17" />
        </svg>
      );
    case 6: // Clean Water
      return (
        <svg {...props}>
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          <path d="M8.5 14.5a3.5 3.5 0 0 0 7 0" />
        </svg>
      );
    case 7: // Clean Energy
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      );
    case 8: // Decent Work
      return (
        <svg {...props}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
          <polyline points="6 14 12 4 18 10 21 7" />
        </svg>
      );
    case 9: // Industry & Infrastructure
      return (
        <svg {...props}>
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="10" x2="6" y2="14" />
          <line x1="18" y1="10" x2="18" y2="14" />
        </svg>
      );
    case 10: // Reduced Inequalities
      return (
        <svg {...props}>
          <line x1="5" y1="9" x2="19" y2="9" />
          <line x1="5" y1="15" x2="19" y2="15" />
          <path d="M12 3v18" />
        </svg>
      );
    case 11: // Sustainable Cities
      return (
        <svg {...props}>
          <rect x="3" y="10" width="7" height="12" rx="1" />
          <rect x="14" y="2" width="7" height="20" rx="1" />
          <path d="M7 6l2 2 3-3" />
        </svg>
      );
    case 12: // Responsible Consumption
      return (
        <svg {...props}>
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-2.73" />
        </svg>
      );
    case 13: // Climate Action
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
          <path d="M12 2a10 10 0 0 1 10 10h-10V2z" />
          <path d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24" />
        </svg>
      );
    case 14: // Life below Water
      return (
        <svg {...props}>
          <path d="M23 12a11.09 11.09 0 0 0-21-3a11.09 11.09 0 0 0 0 6a11.09 11.09 0 0 0 21-3Z" />
          <path d="M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
      );
    case 15: // Life on Land
      return (
        <svg {...props}>
          <path d="M12 22V12M12 12l-5 5M12 12l5 5" />
          <path d="M12 2a5 5 0 0 0-5 5c0 4 5 9 5 9s5-5 5-9a5 5 0 0 0-5-5z" />
        </svg>
      );
    case 16: // Peace, Justice
      return (
        <svg {...props}>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 17: // Partnerships
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
