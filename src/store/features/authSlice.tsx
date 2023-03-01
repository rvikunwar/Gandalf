import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SerializedError, authStateProps, loginProps } from "./storeTypes";
import { RootState } from "store";
import { GandalfAppAPI } from "../../api";
import axios from "axios";
import { INVALID_CREDENTIALS } from "../../constant";


export const loginUser = createAsyncThunk
    <authStateProps, loginProps, { rejectValue: SerializedError }>
    ("user/loginUser",
    async ( formdata, { rejectWithValue }) => {
        try {
            const res = await GandalfAppAPI.login({ ...formdata, role: 1 })
                
            // DEBUG
            // console.log(res, formdata)
            // return res;
            return { ...res.user, token: res.token } as authStateProps;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if(error.response){
                    return rejectWithValue({ message: error.response?.data.message } as SerializedError); 
                }
            }
            return rejectWithValue({ message: INVALID_CREDENTIALS} as SerializedError); 
        }
    }
);

const initialState_: authStateProps = {
    auth: false,
    token: "",
    id: null, 
    firstName: "", 
    lastName: "", 
    contact: "", 
    createdAt: "", 
    email: "",
    isActive: false, 
    isProfileVerified: false, 
    isVerified: false, 
    isFetching: false,
    isSuccess: false,
    isError: false,
    message: undefined,
}

export const userSlice = createSlice({
    name: "user",
    initialState:  initialState_,
    reducers: {
        clearState: (state: authStateProps) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.message = undefined;
        },

        logout: (state: authStateProps) => {
            state.auth = false;
            state.token = "";
            state.id = null; 
            state.firstName = ""; 
            state.lastName = ""; 
            state.contact = "";
            state.createdAt = ""; 
            state.email = "";
            state.isActive = false;
            state.isProfileVerified = false; 
            state.isVerified = false; 
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = undefined;
        }
    },

    extraReducers:  (builder) => {
        
        //LOGIN
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.auth = true;
            state.token = payload.token;
            state.id = payload.id; 
            state.firstName = payload.firstName; 
            state.lastName = payload.lastName;
            state.contact = payload.contact; 
            state.createdAt = payload.createdAt; 
            state.email = payload.email;
            state.isActive = payload.isActive; 
            state.isProfileVerified = payload.isProfileVerified;
            state.isVerified = payload.isVerified;
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = undefined;
        })

        .addCase(loginUser.pending, (state) => {
            state.isFetching = true;
        })

        .addCase(loginUser.rejected, (state, action) => {
            state.isFetching = false;
            state.isError = true;
            if(action.payload){
                state.message = action.payload.message
            } else {
                state.message = action.error.message
            }

        })
      },
});

export const { clearState, logout } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
