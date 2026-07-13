import { useState } from 'react';

const categories = ['General', 'Billing', 'Technical', 'Delivery', 'Account'];

const ComplaintFormModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({ subject: '', description: '', category: 'General', priority: 'Medium' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await onSubmit(form);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not log the complaint. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-ink/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-xl text-ink">Log a complaint</h2>
          <button onClick={onClose} aria-label="Close" className="text-slate hover:text-ink text-xl leading-none">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label-text">Subject</label>
            <input
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Short summary of the issue"
              className="input-field"
            />
          </div>

          <div>
            <label className="label-text">Description</label>
            <textarea
              name="description"
              required
              rows={4}
              value={form.description}
              onChange={handleChange}
              placeholder="What happened, and what would resolve it?"
              className="input-field resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label-text">Category</label>
              <select name="category" value={form.category} onChange={handleChange} className="input-field">
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-text">Priority</label>
              <select name="priority" value={form.priority} onChange={handleChange} className="input-field">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          {error && <p className="text-sm text-clay">{error}</p>}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-secondary flex-1">Cancel</button>
            <button type="submit" disabled={submitting} className="btn-primary flex-1">
              {submitting ? 'Logging…' : 'Log complaint'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintFormModal;
