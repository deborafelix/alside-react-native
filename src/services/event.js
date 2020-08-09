import api from '../configs/api';
const eventEndpoint = 'event';

export const create = async (payload, token) => {
  const response = await api.post(eventEndpoint, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const getAll = async () => {
  const response = await api.get(eventEndpoint);

  return response.data;
};

export const getCompanyEvent = async (token) => {
  const response = await api.get(`${eventEndpoint}/company`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
