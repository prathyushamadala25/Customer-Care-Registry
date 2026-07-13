import api from './api.js';

const STORAGE_KEY = 'ccr_auth';

const persist = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
};

const register = async (payload) => {
  const res = await api.post('/auth/register', payload);
  return persist(res.data);
};

const login = async (payload) => {
  const res = await api.post('/auth/login', payload);
  return persist(res.data);
};

const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const getStoredSession = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export default { register, login, logout, getStoredSession };
