import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SerializedError, userProps, userStateProps } from "./storeTypes";
import { RootState } from "store";
import { GandalfAppAPI } from "../../api";
import axios from "axios";


export const getAllManagements = createAsyncThunk
    < { business: userProps[], professionals: userProps[]}, {}, { rejectValue: SerializedError }>
    ("management/getAllUsers",
    async ( _,{ rejectWithValue }) => {
        try {
            const res = await GandalfAppAPI.getAllUsers()
                
            // DEBUG
            // console.log(res)
            // return res;
                    //filtering only professionals
            let professionals: userProps[] = [], business: userProps[] = [];
            res.forEach((user: userProps) => {
                if(user.role === 3){
                    professionals.push(user)
                } 
                if(user.role === 2){
                    business.push(user);
                }
            })
            return { business, professionals };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if(error.response){
                    return rejectWithValue({ message: error.response?.data.message } as SerializedError); 
                }
            }
            return rejectWithValue({ message: 'Server error'} as SerializedError); 
        }
    }
);

const initialState_: userStateProps = {
    professionals: [],
    business: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    message: undefined,
}

export const managementSlice = createSlice({
    name: "management",
    initialState:  initialState_,
    reducers: {
        clearState: (state: userStateProps) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.message = undefined;
        },
    },

    extraReducers:  (builder) => {
        
        //GET USERS
        builder.addCase(getAllManagements.fulfilled, (state, { payload }) => {
            
            state.business= payload.business;
            state.professionals = payload.professionals;
            state.isFetching = false;
            state.isSuccess = true;
            state.isError = false;
            state.message = undefined;
        })

        .addCase(getAllManagements.pending, (state) => {
            state.isFetching = true;
        })

        .addCase(getAllManagements.rejected, (state, action) => {
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

export const { clearState } = managementSlice.actions;

export const managementSelector = (state: RootState) => state.management;
