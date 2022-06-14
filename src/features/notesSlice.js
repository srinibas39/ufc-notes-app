import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ArchiveNote } from "../services/ArchiveNote";
import { CreateNote } from "../services/CreateNote";
import { DeleteArchive } from "../services/DeleteArchive";
import { DeleteTrash } from "../services/DeleteTrash";
import { RestoreArchive } from "../services/RestoreArchive";
import { RestoreTrash } from "../services/RestoreTrash";
import { TrashNote } from "../services/TrashNote";

const initialState = {
    loading: false,
    error: "",
    notes: [],
    labels: [],
    color: "",
    archives: [],
    trash: []
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

export const loadArchive = createAsyncThunk("notes/loadArchive",
    async ({ token, note, noteId }, thunkAPI) => {
        try {
            const res = await ArchiveNote(token, note, noteId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const deleteArchive = createAsyncThunk("notes/deleteArchive",
    async ({ token, noteId }, thunkAPI) => {
        try {
            const res = await DeleteArchive(token, noteId);
            return res.data.archives;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const restoreArchive = createAsyncThunk("notes/restoreArchive",
    async ({ token, noteId }, thunkAPI) => {
        try {
            const res = await RestoreArchive(token, noteId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const loadTrash = createAsyncThunk("notes/loadTrash",
    async ({ token, note, noteId }, thunkAPI) => {
        try {
            const res = await TrashNote(token, note, noteId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const deleteTrash = createAsyncThunk("notes/deleteTrash",
    async ({ token, noteId }, thunkAPI) => {
        try {
            const res = await DeleteTrash(token, noteId);
            return res.data.trash;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })
export const restoreTrash = createAsyncThunk("notes/restoreTrash",
    async ({ token, noteId }, thunkAPI) => {
        try {
            const res = await RestoreTrash(token, noteId);
            return res.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    })

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
            state.notes = action.payload;
        },
        [createNote.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [loadArchive.pending]: (state) => {
            state.loading = true;
        },
        [loadArchive.fulfilled]: (state, action) => {
            state.loading = false;
            state.notes = action.payload.notes;
            state.archives = action.payload.archives;
        },
        [loadArchive.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteArchive.pending]: (state) => {
            state.loading = true;
        },
        [deleteArchive.fulfilled]: (state, action) => {
            state.loading = false;
            state.archives = action.payload;

        },
        [deleteArchive.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [restoreArchive.pending]: (state) => {
            state.loading = true;
        },
        [restoreArchive.fulfilled]: (state, action) => {
            state.loading = false;
            state.archives = action.payload.archives;
            state.notes = action.payload.notes;
        },
        [restoreArchive.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        ,
        [loadTrash.pending]: (state) => {
            state.loading = true;
        },
        [loadTrash.fulfilled]: (state, action) => {
            state.loading = false;
            state.notes = action.payload.notes;
            state.trash = action.payload.trash;
        },
        [loadTrash.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteTrash.pending]: (state) => {
            state.loading = true;
        },
        [deleteTrash.fulfilled]: (state, action) => {
            state.loading = false;
            state.trash = action.payload;

        },
        [deleteTrash.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [restoreTrash.pending]: (state) => {
            state.loading = true;
        },
        [restoreTrash.fulfilled]: (state, action) => {
            state.loading = false;
            state.trash = action.payload.trash;
            state.notes = action.payload.notes;
        },
        [restoreTrash.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }


})


export const { loadTags, removeTags, setColor, removeAllTags } = notesSlice.actions;
export default notesSlice.reducer;