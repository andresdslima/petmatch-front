import { api } from './config';

export const getAdoptionByUser = async () => {
	const response = await api.get(`/adoption/user`);
	return response.data;
};

export const createAdoption = async petId => {
	try {
		const { data, status } = await api.post(`/adoption/${petId}`);
		return { data, status };
	} catch (error) {
		console.error(error);
		alert('Erro ao cadastrar usuário');
		return { status: error.response.status };
	}
};
