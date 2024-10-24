import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchProductsApi = async ({ page = 1, limit = 4, filters = {}}) => {
  const response = await axiosInstance.get('/campers', {
    params: {
      page: page ?? 1,
      limit,
      ...filters
    }
  });

  return response.data;
};
