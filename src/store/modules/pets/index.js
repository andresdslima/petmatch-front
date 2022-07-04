import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pet: []
}

const petsSlice = createSlice({
    name: "@pets",
    initialState,
    reducers:{
        setPetList: (state, action) => {
            Object.assign(state, {
                ...state,
                pet: action.payload
            })
        } ,
        addNewPet: (state, action) => {
            Object.assign(state, {
                ...state,
                pet: [...state.pet, action.payload]
        })       
    }
}
})

export const {setPetList, addNewPet} = petsSlice.actions;

export default petsSlice.reducer;