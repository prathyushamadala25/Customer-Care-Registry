const styles = {
  Open: 'text-clay border-clay bg-clay-light',
  'In Progress': 'text-marigold border-marigold bg-marigold-light',
  Resolved: 'text-pine border-pine bg-pine-light',
  Closed: 'text-slate border-slate bg-slate-light',
};

const StatusBadge = ({ status }) => (
  <span className={`stamp ${styles[status] || styles.Open}`}>{status}</span>
);

export default StatusBadge;
