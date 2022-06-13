import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateNote } from "../services/CreateNote";

const initialState = {
    loading: false,
    error: "",
    notes: [],
    labels: [],
    color: ""
}

export const createNote = createAsyncThunk("notes/createNote",
    async ({ token, note }, thunkAPI) => {
        try {
            const res = await CreateNote(token, note);
            return res.data.notes;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
)
export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        loadTags: (state, action) => {
            state.labels.push(action.payload);
        },
        removeTags: (state, action) => {
            state.labels.pop(action.payload)
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        removeAllTags: (state) => {
            state.labels = [];
        }
    },
    extraReducers: {
        [createNote.pending]: (state) => {
            state.loading = true;
        },
        [createNote.fulfilled]: (state, action) => {
            state.loading = false;
            state.notes=action.payload;
        },
        [createNote.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }


})

export const { loadTags, removeTags, setColor,removeAllTags } = notesSlice.actions;
export default notesSlice.reducer;