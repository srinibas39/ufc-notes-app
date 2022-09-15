import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import modeReducer from "../features/modeSlice";
import notesReducer from "../features/notesSlice";




export const store = configureStore({
    reducer: {
        auth: authReducer,
        notes: notesReducer,
        mode: modeReducer
    },

})

