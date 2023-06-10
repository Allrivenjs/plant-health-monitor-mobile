import axios from 'axios';
import { config } from '../config';
import { getLocalValue } from '../localStore';

const axiosClient = axios.create({
	baseURL: `${config.API_URL}/api/v1/`,
	headers: config.headers,
});

axiosClient.interceptors.request.use( async (config) => {
  const token = await getLocalValue('token');

	if (token) {
		config.headers!['Authorization'] = `Bearer ${token}`;
	};

	return config;
	}, (error) => {
		return Promise.reject(error);
	}
);

axiosClient.interceptors.response.use((config) => {
		return config;
	}, (error) => {
		return Promise.reject(error);
	}
);

export { axiosClient };
