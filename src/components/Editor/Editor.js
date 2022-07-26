import { useEffect, useState } from "react";
import { createNote, removeAllTags, setEditNote, setLabel, setShowEditor, updateNote } from "../../features/notesSlice";
import { ColorPalette } from "../colorPalette/ColorPalette"
import "./Editor.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleToast, handleToastWarning } from "../../utils/ToastUtils/toastUtils";


export const Editor = ({ setShow }) => {

    const today = new Date().toLocaleString();
    const [note, setNote] = useState({
        noteTitle: "",
        noteBody: "",
        color: "",
        tags: [],
        priority: "Low Priority",
        date: today,
        pin: false
    });

    const [prioritySelect, setPrioritySelect] = useState(["Low Priority", "Medium Priority", "High Priority"]);
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { labels, color, editNote, showEditor } = useSelector((state) => state.notes);

    useEffect(() => {
        setNote({ ...note, tags: labels })
    }, [labels])

    useEffect(() => {
        setNote({ ...note, color: color })
    }, [color])


    useEffect(() => {
        if (showEditor) {
            setNote(editNote);
            dispatch(setLabel(editNote.tags))
        } else {
            setNote({
                ...note,
                noteTitle: "",
                noteBody: "",
                color: "",
                tags: [],
                priority: "Low Priority",
                date: today,
                pin: false
            })
        }
    }, [showEditor])


    const handleNote = () => {
        if (note.noteTitle) {

            handleToast("Setting up your note")
            setTimeout(() => {
                
                if (showEditor && editNote) {

                    dispatch(updateNote({ token, note, noteId: editNote._id }));
                    dispatch(setEditNote({}));
                    dispatch(setShowEditor(false));
                    dispatch(removeAllTags())
                }
                else {
                    dispatch(createNote({ token, note }));
                    setNote({
                        ...note,
                        noteTitle: "",
                        noteBody: "",
                        color: "",
                        tags: [],
                        priority: "Low Priority",
                        date: today,
                        pin: false
                    })
                    dispatch(removeAllTags())


                }


            }, 1000)
        }
        else{
            handleToastWarning("Note title cannot be empty")
        }

    }
    const handleLabel = () => {
        setShow(true)
    }

    const handlePriority = (priority) => {
        setNote({ ...note, priority: priority })
    }

    const handlePin = () => {
        note.pin ? setNote({ ...note, pin: false }) : setNote({ ...note, pin: true })
    }

    return <>
        <div className={!note.color ? "editor" : `editor ${note.color} `} onClick={(e) => e.stopPropagation()} >
            <div className="editor-header">
                <input type="text" placeholder="Type Title of the Note" value={note.noteTitle} onChange={(e) => setNote({ ...note, noteTitle: e.target.value })} />
                {
                    note.pin ?
                        <span className="material-symbols-sharp" onClick={handlePin}>
                            push_pin
                        </span> :
                        <span className="material-symbols-rounded" onClick={handlePin}>
                            push_pin
                        </span>

                }
            </div>
            <div className="editor-body">
                <textarea placeholder="Type Body of the Text" value={note.noteBody} onChange={(e) => setNote({ ...note, noteBody: e.target.value })}></textarea>
            </div>
            <div className="editor-tags">

                {
                    note.tags && note.tags.map((tag) => {
                        return <button key={tag}>{tag}</button>
                    })
                }


            </div>
            <div className="editor-footer">
                <small>{today}</small>
                <select onChange={(e) => handlePriority(e.target.value)} value={note.priority}>
                    {
                        prioritySelect.map((priority) => {
                            return <option key={priority} value={priority}>{priority}</option>
                        })
                    }

                </select>
                <div className="editor-option">
                    <span className="material-symbols-outlined" onClick={handleNote}>
                        check_circle
                    </span>
                    <ColorPalette />
                    <span className="material-symbols-outlined" onClick={handleLabel}>
                        label
                    </span>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
}