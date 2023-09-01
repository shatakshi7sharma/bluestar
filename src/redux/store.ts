import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";// defaults to localStorage for web
import authReducer from './slices/authSlice';
import { authApi } from '../services/authApi';
import { useDispatch } from 'react-redux'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
  auth: persistReducer({ key: "auth", storage }, authReducer),
  [authApi.reducerPath]: authApi.reducer, 
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
      serializableCheck: false,
  }).concat(authApi.middleware)
  
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// setupListeners(store.dispatch)

export const persistor = persistStore(store);
