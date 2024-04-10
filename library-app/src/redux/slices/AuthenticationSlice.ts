import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, LoginUserPayload} from "../../models/User";

import axios from "axios";

interface AuthenticationSliceState {
    loggedInUser: User | undefined;
    loading: boolean;
    error: boolean;
    registerSuccess: false;
}

const initialState:AuthenticationSliceState = {
    loggedInUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false,
}

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user:LoginUserPayload, thunkAPI) => {
        try {
            const req = await axios.post('http://localhost:8000/auth/login', user);
            return req.data.user;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const AuthenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    // pending logic
         builder.addCase(loginUser.pending, (state,action) => {
            state = {
                ...state,
                error: false,
                loading:true
            }
            return state;
         });
     // Resolved logic 
         builder.addCase(loginUser.fulfilled, (state,action) => {
            state = {
                ...state,
                loading: false,
                loggedInUser: action.payload
            }
         });

         // Rejected Logic
         builder.addCase(loginUser.rejected,(state,action) => {
            state = {
                ...state,
                error: true,
                loading: false
            }

            return state;
         })
    }
});
// project
export const {} = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;