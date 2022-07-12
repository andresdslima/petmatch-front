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
				// ...state,
				user: {
					cidade: action.payload.cidade,
					id: action.payload.id,
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
