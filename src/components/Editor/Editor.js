
import { useState } from "react";
import { createNote } from "../../features/notesSlice";
import { ColorPalette } from "../colorPalette/ColorPalette"
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";

export const Editor = ({ setShow }) => {
    const [note, setNote] = useState({
        noteTitle: "",
        noteBody: "",
    });
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);


    const handleNote = () => {
        dispatch(createNote({ token, note }))
    }
    const handleLabel = () => {
        setShow(true)
    }
    return <div className="editor">
        <div className="editor-header">
            <input type="text" placeholder="Type Title of the Note" value={note.noteTitle} onChange={(e) => setNote({ ...note, noteTitle: e.target.value })} />
            <span class="material-symbols-outlined">
                push_pin
            </span>
        </div>
        <div className="editor-body">
            <textarea placeholder="Type Body of the Text" value={note.noteBody} onChange={(e) => setNote({ ...note, noteBody: e.target.value })}></textarea>
        </div>
        <div className="editor-tags">
            <button>tag 1</button>
            <button>tag 1</button>
            <button>tag 1</button>
        </div>
        <div className="editor-footer">
            <small>6/11/2022, 12:04:50 PM</small>
            <select>
                <option>Low Priority</option>
                <option>Medium Priority </option>
                <option>High Priority</option>
            </select>
            <div className="editor-option">
                <span class="material-symbols-outlined" onClick={handleNote}>
                    check_circle
                </span>
                <ColorPalette />
                <span class="material-symbols-outlined" onClick={handleLabel}>
                    label
                </span>
            </div>
        </div>
    </div>
}