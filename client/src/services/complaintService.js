import api from './api.js';

const getAll = async () => {
  const res = await api.get('/complaints');
  return res.data;
};

const create = async (data) => {
  const res = await api.post('/complaints', data);
  return res.data;
};

export default { getAll, create };
