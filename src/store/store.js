import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import notesReducer from "../features/notesSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer
    },

})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch