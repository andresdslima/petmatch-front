import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
    usersPreferences: {}
}

const usersPreferencesSlice = createSlice({
    name: '@usersPreferences',
    initialState,
    reducers: {
        setUsersPreferences: (state, action) => {
            Object.assign(state, {
                ...state,
            usersPreferencesSlice: action.payload
            })
        }
    }
})

export const { setUsersPreferences } = usersPreferencesSlice.actions;

export default usersPreferencesSlice.reducer;