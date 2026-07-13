const Logo = ({ variant = 'dark', className = '' }) => {
  const ink = variant === 'light' ? '#FFFFFF' : '#0F5257';
  const accent = '#E1A93A';

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Customer Care Registry logo"
    >
      {/* Ledger card body */}
      <rect x="4" y="3" width="28" height="34" rx="3" fill={variant === 'light' ? 'rgba(255,255,255,0.08)' : '#E4EEED'} stroke={ink} strokeWidth="1.6" />
      {/* Perforation edge, echoes the ticket-stub cards in the app */}
      <line x1="12" y1="6" x2="12" y2="34" stroke={ink} strokeWidth="1.1" strokeDasharray="1.6 2.6" opacity="0.55" />
      {/* Ledger rule lines */}
      <line x1="17" y1="12" x2="27" y2="12" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
      <line x1="17" y1="17" x2="27" y2="17" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
      <line x1="17" y1="22" x2="24" y2="22" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.75" />
      {/* Stamp mark — resolved/checked entry */}
      <circle cx="27" cy="28" r="8.5" fill={variant === 'light' ? '#0A393D' : '#FFFFFF'} stroke={accent} strokeWidth="1.8" transform="rotate(-8 27 28)" />
      <path d="M23.2 28.2l2.4 2.4 5-5.4" stroke={accent} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="rotate(-8 27 28)" />
    </svg>
  );
};

export default Logo;
