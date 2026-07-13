import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useAuth } from '../context/AuthContext.jsx';
import complaintService from '../services/complaintService.js';

const STATUSES = ['Open', 'In Progress', 'Resolved', 'Closed'];

const Dashboard = () => {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    complaintService
      .getAll()
      .then(setComplaints)
      .catch(() => setComplaints([]))
      .finally(() => setLoading(false));
  }, []);

  const counts = STATUSES.map((status) => ({
    status,
    count: complaints.filter((c) => c.status === status).length,
  }));

  const total = complaints.length;
  const resolved = complaints.filter((c) => c.status === 'Resolved' || c.status === 'Closed').length;
  const resolutionRate = total ? Math.round((resolved / total) * 100) : 0;

  return (
    <div className="p-8 max-w-5xl">
      <h1 className="font-display text-2xl text-ink">Welcome back, {user?.name?.split(' ')[0]}</h1>
      <p className="text-sm text-slate mt-1 mb-6 capitalize">{user?.role} view · registry overview</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="ticket-stub rounded-lg pl-5 pr-4 py-4">
          <p className="label-text mb-0">Total records</p>
          <p className="font-mono text-3xl text-ink mt-1">{loading ? '—' : total}</p>
        </div>
        <div className="ticket-stub rounded-lg pl-5 pr-4 py-4">
          <p className="label-text mb-0">Open right now</p>
          <p className="font-mono text-3xl text-clay mt-1">
            {loading ? '—' : complaints.filter((c) => c.status === 'Open').length}
          </p>
        </div>
        <div className="ticket-stub rounded-lg pl-5 pr-4 py-4">
          <p className="label-text mb-0">Resolution rate</p>
          <p className="font-mono text-3xl text-pine mt-1">{loading ? '—' : `${resolutionRate}%`}</p>
        </div>
      </div>

      <div className="ticket-stub rounded-lg pl-6 pr-6 py-5">
        <p className="font-display text-lg text-ink mb-4">Records by status</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={counts}>
              <CartesianGrid vertical={false} stroke="#E4EEED" />
              <XAxis dataKey="status" tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={{ stroke: '#E4EEED' }} tickLine={false} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12, fill: '#6B7280' }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#F7F4EC' }} />
              <Bar dataKey="count" fill="#0F5257" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
