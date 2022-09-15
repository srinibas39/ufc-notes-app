import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mode: false,
    darkMode:"dark-mode"
}

const modeSlice = createSlice({
    initialState,
    name: "mode",
    reducers: {
        setMode: (state) => {
            state.mode = !state.mode;
        },
        setDarkMode: (state, action) => {
            state.darkMode= action.payload;
        }
    }
})

export const { setMode , setDarkMode} = modeSlice.actions;

export default modeSlice.reducer;
