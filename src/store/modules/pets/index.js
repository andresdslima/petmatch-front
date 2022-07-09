import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	pets: [],
	petsFilter: {},
	petItem: []
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
		setPetItem: (state, action) => {
			Object.assign(state, {
				...state,
				petItem: action.payload,
			});
		},
		addNewPet: (state, action) => {
			Object.assign(state, {
				...state,
				pets: [...state.pets, action.payload],
			});
		},

		setPetFilter: (state, action) => {
			Object.assign(state, {
				...state,
				petsFilter: action.payload,
			});
		}
	},
});

export const { setPetList, addNewPet, setPetFilter, setPetItem } = petsSlice.actions;

export default petsSlice.reducer;
