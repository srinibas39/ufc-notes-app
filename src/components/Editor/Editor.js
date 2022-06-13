
import { useEffect, useState } from "react";
import { createNote } from "../../features/notesSlice";
import { ColorPalette } from "../colorPalette/ColorPalette"
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";

export const Editor = ({ setShow }) => {
    
    const today=new Date().toLocaleString();
    const [note, setNote] = useState({
        noteTitle: "",
        noteBody: "",
        color: "",
        tags: [],
        priority: "Low Priority",
        date:today
    });
    const [prioritySelect, setPrioritySelect] = useState(["Low Priority", "Medium Priority", "High Priority"]);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { labels, color } = useSelector((state) => state.notes);

    useEffect(() => {
        setNote({ ...note, tags: labels })
    }, [labels])

    const handleNote = () => {
        if (note.noteTitle) {
            setNote({ ...note, color: color })
            dispatch(createNote({ token, note }));
        }
    }
    const handleLabel = () => {
        setShow(true)
    }
    const handlePriority = (priority) => {
        setNote({ ...note, priority: priority })

    }


    

    return <div className={!color ? "editor" : `editor ${color} `}>
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

            {
                labels && labels.map((label) => {
                    return <button key={label}>{label}</button>
                })
            }


        </div>
        <div className="editor-footer">
            <small>{today}</small>
            <select onClick={(e) => handlePriority(e.target.value)}>
                {
                    prioritySelect.map((priority) => {
                        return <option key={priority} value={priority}>{priority}</option>
                    })
                }

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