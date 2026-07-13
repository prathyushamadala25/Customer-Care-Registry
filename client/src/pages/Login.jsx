import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not sign in. Check your details and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-between bg-pine-deep text-white p-10 bg-ledger-lines">
        <Link to="/"><Logo size={30} variant="light" withWordmark /></Link>
        <div>
          <p className="font-display text-3xl leading-snug max-w-sm">
            Every complaint logged. Every resolution tracked.
          </p>
          <p className="text-white/60 text-sm mt-4 max-w-xs">
            Sign in to pick up right where the last entry left off.
          </p>
        </div>
        <p className="text-white/40 text-xs font-mono">est. registry system</p>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-2xl text-ink mb-1">Sign in</h1>
          <p className="text-sm text-slate mb-6">Access your registry account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label-text">Email</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label-text">Password</label>
              <input name="password" type="password" required value={form.password} onChange={handleChange} className="input-field" placeholder="••••••••" />
            </div>

            {error && <p className="text-sm text-clay">{error}</p>}

            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="text-sm text-slate mt-6">
            No account yet?{' '}
            <Link to="/register" className="text-pine font-medium hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
