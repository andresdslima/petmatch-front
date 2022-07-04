import { api } from './config';

export const getPets = async () => {
	try {
		const response = await api.get('/pets');
		console.log(response);
		return response.data;
	} catch (error) {
		alert(`Error: ${error.response.data}`);
	}
};
