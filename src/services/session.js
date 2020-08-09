import api from '../configs/api';
const sessionEndpoint = 'session';
const companySessionEndpoint = 'company-session';

export const authUser = async (payload) => {
  const response = await api.post(sessionEndpoint, payload);

  return response.data;
};
export const authCompany = async (payload) => {
  const response = await api.post(companySessionEndpoint, payload);

  return response.data;
};
