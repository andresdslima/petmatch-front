import { createSlice } from "reduxjs/toolkit";

const initialState = {
    match: []
}

const matchesSlice = createSlice({
    name: "@matches",
    initialState,
    reducers:{
        setMatchList: (state, action) => {
            object.assign(state, {
                ...state,
                match: action.payload
            })
        } ,
        addNewMatch: (state, action) => {
            object.assign(state, {
                ...state,
                match: [...state.match, action.payload]
        })       
    }
}
})

export const {setMatchList, addNewMatch} = matchesSlice.actions;

export default matchesSlice.reducer;