import { api } from './config';

export const getUserById = async id => {
	try {
		const response = await api.get(`/users/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
		alert('Erro no getUserById');
		return { status: error.response.status };
	}
};

export const createUser = async user => {
	try {
		const { data, status } = await api.post('/users/', user);
		alert('Usuário cadastrado com sucesso!');
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
		alert('Perfil atualizado com sucesso!');
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
		return response.data;
	} catch (error) {
		console.error(error);
		alert('Erro ao efetuar login');
		return { status: error.response.status };
	}
};
