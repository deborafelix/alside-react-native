import api from '../configs/api';
const orderEndpoint = 'order';

export const create = async (payload, token) => {
  const response = await api.post(orderEndpoint, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
export const getAll = async (token) => {
  const response = await api.get(orderEndpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
