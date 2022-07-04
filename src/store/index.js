import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './modules/users';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import petsSlice from "./modules/pets

const persistConfig = {
  key: "@users",
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
	reducer: {
    persistedReducer,
    petsSlice
	},
});
