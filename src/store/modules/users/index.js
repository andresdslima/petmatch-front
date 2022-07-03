import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLogged: false,
	accessToken: '',
	firstName: '',
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
				firstName: action.payload.firstName,
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
