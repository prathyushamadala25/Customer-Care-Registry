import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Logo from './Logo.jsx';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-slate/15 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2.5">
        <Logo className="w-8 h-8" />
        <span className="font-display text-lg text-ink">Customer Care Registry</span>
      </Link>

      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sm text-ink/70 hover:text-pine">Dashboard</Link>
          <Link to="/complaints" className="text-sm text-ink/70 hover:text-pine">Complaints</Link>
          <div className="flex items-center gap-2 pl-4 border-l border-slate/20">
            <div className="w-7 h-7 rounded-full bg-pine text-white text-xs font-semibold flex items-center justify-center">
              {user?.name?.[0]?.toUpperCase() || '?'}
            </div>
            <button onClick={logout} className="text-sm text-slate hover:text-clay">Log out</button>
          </div>
        </div>
      ) : (
        <div className="space-x-3">
          <Link to="/login" className="btn-secondary">Sign in</Link>
          <Link to="/register" className="btn-primary">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
