import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogged: false,
	accessToken: '',
	name: '',
	userStatus: 0,
	permission: 0,
	id: 0,
};

const usersSlice = createSlice({
	name: '@user',
	initialState,
	reducers: {
		signIn(state, action) {
			Object.assign(state, {
				isLogged: true,
				accessToken: action.payload.accessToken,
				name: action.payload.name,
				userStatus: action.payload.userStatus,
				permission: action.payload.permission,
				id: action.payload.id,
			});
		},
		signOut(state, action) {
			Object.assign(state, initialState);
		},
	},
});

export const { signIn, signOut } = usersSlice.actions;

export default usersSlice.reducer;
