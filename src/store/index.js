import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import usersSlice from './modules/users';
import petsSlice from './modules/pets';
import adoptionSlice from './modules/adoption';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: '@users',
	storage,
};

const persistedReducer = persistReducer(persistConfig, usersSlice);

export const store = configureStore({
	reducer: {
		persistedReducer,
		petsSlice,
		adoptionSlice,
	},
});
