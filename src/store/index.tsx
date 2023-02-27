import { configureStore } from "@reduxjs/toolkit";
import {
    persistReducer,
} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userSlice } from "./features/authSlice";
import { managementSlice } from "./features/userSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
};


const persistedAuthReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
    reducer: {
        user: persistedAuthReducer,
        management: managementSlice.reducer,
    }, 
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

