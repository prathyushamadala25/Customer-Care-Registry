import { useEffect, useState } from 'react';
import ComplaintCard from '../components/ComplaintCard.jsx';
import ComplaintFormModal from '../components/ComplaintFormModal.jsx';
import complaintService from '../services/complaintService.js';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const load = () => {
    setLoading(true);
    complaintService
      .getAll()
      .then(setComplaints)
      .catch(() => setComplaints([]))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleCreate = async (payload) => {
    await complaintService.create(payload);
    load();
  };

  return (
    <div className="p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl text-ink">Complaints</h1>
          <p className="text-sm text-slate mt-1">Every record you've logged, ticket by ticket.</p>
        </div>
        <button onClick={() => setShowModal(true)} className="btn-primary">
          + Log complaint
        </button>
      </div>

      {loading ? (
        <p className="text-sm text-slate">Loading records…</p>
      ) : complaints.length === 0 ? (
        <div className="ticket-stub rounded-lg pl-8 pr-8 py-14 text-center">
          <p className="font-display text-lg text-ink mb-1">Nothing on file yet</p>
          <p className="text-sm text-slate mb-5">Log your first complaint to start the registry.</p>
          <button onClick={() => setShowModal(true)} className="btn-primary">
            + Log complaint
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {complaints.map((c) => (
            <ComplaintCard key={c._id} complaint={c} />
          ))}
        </div>
      )}

      {showModal && <ComplaintFormModal onClose={() => setShowModal(false)} onSubmit={handleCreate} />}
    </div>
  );
};

export default Complaints;
