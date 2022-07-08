import { api } from './config';

export const getUser = async id => {
	const response = await api.get(`/users/${id}`);
	console.log(response);
	return response.data;
};

export const createUser = async user => {
	try {
		const { data, status } = await api.post('/users/', user);
		console.log({ data, status });
		return { data, status };
	} catch (error) {
		console.error(error);
		alert('Erro ao cadastrar usuário');
		return { status: error.response.status };
	}
};

export const updateUser = async (id, user) => {
	try {
		const response = await api.put(`/users/${id}`, user);
		console.log(response);
		return response.data;
	} catch (error) {
		console.error(error);
		alert('Erro ao atualizar usuário');
		return { status: error.response.status };
	}
};

export const loginUser = async user => {
	try {
		const response = await api.post('/login', user);
		console.log(response);
		return response.data;
	} catch (error) {
		console.error(error);
		return { status: error.response.status };
	}
};
