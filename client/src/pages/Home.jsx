import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-paper">
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="font-mono text-xs tracking-widest uppercase text-marigold mb-4">Ticket No. 000001 &mdash; and counting</p>
        <h1 className="font-display text-4xl md:text-5xl text-ink leading-tight">
          A registry for every complaint, from first report to final resolution.
        </h1>
        <p className="text-slate mt-5 max-w-xl mx-auto">
          Log an issue, track its status, and see how service quality moves over time —
          all in one ledger built for customer care teams.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link to={isAuthenticated ? '/complaints' : '/register'} className="btn-primary">
            {isAuthenticated ? 'Go to complaints' : 'Get started'}
          </Link>
          {!isAuthenticated && (
            <Link to="/login" className="btn-secondary">Sign in</Link>
          )}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Log', desc: 'Record the issue with category and priority the moment it comes in.' },
          { label: 'Track', desc: 'Every record moves through Open, In Progress, Resolved, Closed.' },
          { label: 'Learn', desc: 'Spot recurring pain points from the dashboard, not guesswork.' },
        ].map((item) => (
          <div key={item.label} className="ticket-stub rounded-lg pl-5 pr-4 py-5">
            <p className="font-mono text-xs text-marigold uppercase tracking-wide mb-2">{item.label}</p>
            <p className="text-sm text-ink/80">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
