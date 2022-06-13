

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { LoginServices } from "../services/LoginService";
import { SignupService } from "../services/SignupService";


const initialState = {
    loading: false,
    token: JSON.parse(localStorage.getItem("login"))?.token,
    user: JSON.parse(localStorage.getItem("login"))?.user,
    error: null
}

export const loadLogin = createAsyncThunk("auth/loadLogin",
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await LoginServices(email, password);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const loadSignup = createAsyncThunk("auth/loadSignup",
    async ({ firstName, lastName, username, password }, thunkAPI) => {
        try {
            const res = await SignupService({ firstName, lastName, username, password });
            return res.data;

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    })

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadLogout: (state) => {
            state.loading = true;
            localStorage.removeItem("login");
            state.token = null;
            state.user = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [loadLogin.pending]: (state) => {
            state.loading = true;
        },
        [loadLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            localStorage.setItem("login", JSON.stringify({
                token: action.payload.encodedToken,
                user: action.payload.foundUser
            }))


        },
        [loadLogin.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload;
        },
        [loadSignup.pending]: (state) => {
            state.loading = true;
        },
        [loadSignup.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.foundUser;
            state.token = action.payload.encodedToken;
            localStorage.setItem("login", JSON.stringify({
                token: action.payload.encodedToken,
                user: action.payload.foundUser
            }))

        },
        [loadSignup.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }

    }
})



export const { loadLogout } = authSlice.actions;

export default authSlice.reducer;