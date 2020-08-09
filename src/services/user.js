import api from '../configs/api';
const userEndpoint = 'user';

export const register = async (payload) => {
  const response = await api.post(userEndpoint, payload);

  return response;
};
