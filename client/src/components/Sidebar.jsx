import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Logo from './Logo.jsx';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: '◧' },
  { to: '/complaints', label: 'Complaints', icon: '▤' },
];

const Sidebar = () => {
  const { user, logout } = useAuth();

  return (
    <aside className="w-60 shrink-0 bg-pine-deep text-white flex flex-col min-h-screen">
      <div className="px-6 py-6 border-b border-white/10 flex items-center gap-2.5">
        <Logo variant="light" className="w-8 h-8 shrink-0" />
        <div>
          <p className="font-display text-base leading-tight">Customer Care</p>
          <p className="font-display text-base leading-tight text-marigold">Registry</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${
                isActive ? 'bg-white/10 text-white font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <span aria-hidden="true">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-marigold text-pine-deep font-semibold text-sm flex items-center justify-center shrink-0">
            {user?.name?.[0]?.toUpperCase() || '?'}
          </div>
          <div className="min-w-0">
            <p className="text-sm text-white truncate">{user?.name}</p>
            <p className="text-xs text-white/50 truncate capitalize">{user?.role}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full mt-2 text-left px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
        >
          Log out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
