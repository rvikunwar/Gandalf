import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSlice } from "./features/authSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
};


const persistedAuthReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
    reducer: {
        user: persistedAuthReducer
    }, 
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

