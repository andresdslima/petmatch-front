import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pets: [],
};

const petsSlice = createSlice({
	name: '@pets',
	initialState,
	reducers: {
		setPetList: (state, action) => {
			Object.assign(state, {
				...state,
				pets: action.payload,
			});
		},
		addNewPet: (state, action) => {
			Object.assign(state, {
				...state,
				pets: [...state.pets, action.payload],
			});
		},
	},
});

export const { setPetList, addNewPet } = petsSlice.actions;

export default petsSlice.reducer;
