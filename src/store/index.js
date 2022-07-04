import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './modules/users';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import matchesSlice from "./modules/matches"

const persistConfig = {
  key: "@users",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
	reducer: {
    persistedReducer,
    matchesSlice
	},
});
