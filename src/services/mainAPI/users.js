import { api } from './config';

export const getUser = async id => {
	const response = await api.get(`/users/${id}`);
	console.log(response);
	return response.data;
};

export const createUser = async user => {
	try {
		const response = await api.post('/users', user);
		console.log(response);
		return response;
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
		return response;
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

// {
// 	"id": 1,
// 	"nome": "Andre Lima",
// 	"email": "andre@email.com",
// 	"idade": 30,
// 	"cpf": "00000000000",
// 	"senha": "123123",
// 	"contato": "11999999999",
// 	"cep": "00000000",
// 	"logradouro": "Rua dos Bobos",
// 	"numero_logradouro": 33,
// 	"complemento": "qlqr coisa",
// 	"bairro": "Bairro dos Bobos",
// 	"cidade": "Cidade dos Bobos",
// 	"uf": "RN",
// 	"userStatus": 1,
// 	"permissao": 1,
// 	"descricao": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
// }
