import api from '../configs/api';
const companyEndpoint = 'company';

export const register = async (payload) => {
  const response = await api.post(companyEndpoint, payload);

  return response;
};
