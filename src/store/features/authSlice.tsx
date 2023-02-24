import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authStateProps, loginProps } from "./storeTypes";
import { RootState } from "store";
import { GandalfAppAPI } from "../../api";
import axios from "axios";


export const loginUser = createAsyncThunk(
    "user/loginUser",
    async ( formdata: loginProps, thunkAPI) => {
        try {
            let status, data, message;

            // fetch("")
            const res = await GandalfAppAPI.login({ ...formdata, role: 1 });
                
            //DEBUG
            console.log(res, formdata)

            return '1'
        } catch (e) { 
            console.log("Error :", e)

            if (typeof e === "string") {
                return thunkAPI.rejectWithValue(e);
            } else if (e instanceof Error) {
                return thunkAPI.rejectWithValue(e.message);
            } else {
                return thunkAPI.rejectWithValue("Invalid email/password")
            }
        }
    }
);

const initialState_: authStateProps = {
    auth: false, 

    name: null,
    email: null,
    phoneNumber: null,
    address: null,

    profile: null,
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
            state.isFetching = false;
            state.isSuccess = true;
            state.auth = false;
            state.name = null;
            state.phoneNumber = null;
            state.email = null;
            state.address = null;
            state.profile = null;
        }
    },

    extraReducers:  (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.isFetching = false;
            state.isError = false
        })

        .addCase(loginUser.pending, (state, action) => {
            state.isFetching = true;
        })

        .addCase(loginUser.rejected, (state, { payload }) => {
            console.log(payload, '123')
            state.isFetching = false;
            state.isError = true;
            state.message = "Invalid email/password"
        })
      },
});

export const { clearState, logout } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
