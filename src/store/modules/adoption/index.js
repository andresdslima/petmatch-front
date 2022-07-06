import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	step: 1,
};

const adoptionSlice = createSlice({
	name: '@adoption',
	initialState,
	reducers: {
		countStep(state, action) {
			Object.assign(state, {
				step: action.payload.step,
			});
		},
	},
});

export const { countStep } = adoptionSlice.actions;

export default adoptionSlice.reducer;
