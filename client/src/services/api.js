import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem('ccr_auth');
  if (raw) {
    try {
      const { token } = JSON.parse(raw);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    } catch {
      // ignore malformed session
    }
  }
  return config;
});

// If the token is rejected, clear the stale session so the UI can
// fall back to a logged-out state instead of silently failing.
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('ccr_auth');
    }
    return Promise.reject(err);
  }
);

export default api;
