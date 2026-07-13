import StatusBadge from './StatusBadge.jsx';

const formatId = (id) => `CCR-${id.slice(-5).toUpperCase()}`;

const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

const ComplaintCard = ({ complaint }) => (
  <div className="ticket-stub rounded-lg pl-5 pr-4 py-4 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="font-mono text-[11px] text-slate tracking-wide">{formatId(complaint._id)}</p>
        <h3 className="font-display text-lg text-ink mt-0.5 truncate">{complaint.subject}</h3>
      </div>
      <StatusBadge status={complaint.status} />
    </div>

    <p className="text-sm text-ink/70 mt-2 line-clamp-2">{complaint.description}</p>

    <div className="flex items-center justify-between mt-4 pt-3 border-t border-dashed border-slate/25">
      <span className="text-xs text-slate uppercase tracking-wide">{complaint.category || 'General'}</span>
      <span className="font-mono text-xs text-slate">{formatDate(complaint.createdAt)}</span>
    </div>
  </div>
);

export default ComplaintCard;
