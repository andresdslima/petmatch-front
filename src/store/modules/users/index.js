import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	login: {
		isLogged: false,
		accessToken: '',
		firstName: '',
		userStatus: 0,
		permission: 0,
		id: 0,
	},
	user: {},
};

const usersSlice = createSlice({
	name: '@user',
	initialState,
	reducers: {
		signIn(state, action) {
			Object.assign(state, {
				login: {
					isLogged: true,
					accessToken: action.payload.accessToken,
					firstName: action.payload.firstName,
					userStatus: action.payload.userStatus,
					permission: action.payload.permission,
					id: action.payload.id,
				},
			});
		},
		storeUser(state, action) {
			Object.assign(state, {
				...state,
				user: {
					id: action.payload.id,
					nome: action.payload.nome,
					sobrenome: action.payload.sobrenome,
					cpf: action.payload.cpf,
					contato: action.payload.contato,
					cep: action.payload.cep,
					logradouro: action.payload.logradouro,
					numero_logradouro: action.payload.numero_logradouro,
					complemento: action.payload.complemento,
					bairro: action.payload.bairro,
					cidade: action.payload.cidade,
					uf: action.payload.uf,
					sobre: action.payload.sobre,
					email: action.payload.email,
					estadoCivil: action.payload.estadoCivil,
					rg: action.payload.rg,
					profissao: action.payload.profissao,
				},
			});
		},
		signOut(state, action) {
			Object.assign(state, initialState);
		},
	},
});

export const { signIn, storeUser, signOut } = usersSlice.actions;

export default usersSlice.reducer;
