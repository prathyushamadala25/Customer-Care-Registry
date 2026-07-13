import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { useAuth } from '../context/AuthContext.jsx';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await register(form);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create the account. Try again.');
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
            Open a new entry in the registry.
          </p>
          <p className="text-white/60 text-sm mt-4 max-w-xs">
            Create an account to log complaints and follow them through to resolution.
          </p>
        </div>
        <p className="text-white/40 text-xs font-mono">est. registry system</p>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h1 className="font-display text-2xl text-ink mb-1">Create account</h1>
          <p className="text-sm text-slate mb-6">Takes less than a minute.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label-text">Full name</label>
              <input name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="label-text">Email</label>
              <input name="email" type="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@example.com" />
            </div>
            <div>
              <label className="label-text">Password</label>
              <input name="password" type="password" required minLength={6} value={form.password} onChange={handleChange} className="input-field" placeholder="At least 6 characters" />
            </div>

            {error && <p className="text-sm text-clay">{error}</p>}

            <button type="submit" disabled={submitting} className="btn-primary w-full">
              {submitting ? 'Creating account…' : 'Create account'}
            </button>
          </form>

          <p className="text-sm text-slate mt-6">
            Already registered?{' '}
            <Link to="/login" className="text-pine font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
