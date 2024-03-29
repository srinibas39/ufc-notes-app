
import "./Note.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteArchive, deleteNote, deleteTrash, loadArchive, loadTrash, restoreArchive, restoreTrash, setEditNote, setShowEditor, updateNote } from "../../features/notesSlice";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleToast } from "../../utils/ToastUtils/toastUtils";

export const Note = ({ note }) => {

    const { token } = useSelector((state) => state.auth);
    const { archives, trash } = useSelector((state) => state.notes);


    const dispatch = useDispatch();
    const location = useLocation();



    const handleArchive = () => {

        handleToast("Your note is getting added to archive");
        if (location.pathname === "/trash") {
            setTimeout(() => dispatch(restoreTrash({ token, noteId: note._id })), 1000)
        }

        setTimeout(() => dispatch(loadArchive({ token, note, noteId: note._id })), 1000)

    }
    const handleTrash = () => {
        handleToast("Your note is getting added to trash");
        if (location.pathname === "/archive") {
            setTimeout(() => dispatch(restoreArchive({ token, noteId: note._id })), 1000)

        }
        setTimeout(() => dispatch(loadTrash({ token, note, noteId: note._id })), 1000)

    }

    const restArchive = () => {
        handleToast("Your note is getting restored from archive");
        setTimeout(() => dispatch(restoreArchive({ token, noteId: note._id })), 1000)
    }
    const restTrash = () => {
        handleToast("Your note is getting restored from trash");
        setTimeout(() => dispatch(restoreTrash({ token, noteId: note._id })), 1000)
    }
    const delNotes = () => {
        handleToast("Your note is getting removed permanently");
        setTimeout(() => {
            if (location.pathname === "/archive") {
                dispatch(deleteArchive({ token, noteId: note._id }))
            }
            if (location.pathname === "/trash") {
                dispatch(deleteTrash({ token, noteId: note._id }))
            }
            if (location.pathname === "/notes") {
                dispatch(deleteNote({ token, noteId: note._id }))
            }
        }, 1000)

    }
    const handleEdit = () => {
        handleToast("setting up your note for editing");
        dispatch(setEditNote(note))
        setTimeout(() => {
            dispatch(setShowEditor(true));
        }, 1500)

    }

    const handlePin = () => {
        note.pin ? handleToast("Your note is getting unpinned") : handleToast("Your note is getting pinned");
        setTimeout(() => {
            note.pin ? dispatch(updateNote({ token, note: { ...note, pin: false }, noteId: note._id })) :
                dispatch(updateNote({ token, note: { ...note, pin: true }, noteId: note._id }))
        }, 1000)

    }


    return <>
        <div className={`note ${note.color}`}>
            <div className="note-header">
                <h3>{note.noteTitle}</h3>
                {
                    location.pathname === "/notes" && (note.pin ? <span className="material-symbols-sharp" onClick={handlePin}>
                        push_pin
                    </span> : <span className="material-symbols-outlined" onClick={handlePin}>
                        push_pin
                    </span>)
                }

            </div>
            <div className="note-body">
                {note.noteBody}
            </div>
            <div className="note-tags">
                {
                    note.tags && note.tags.map((tag) => {
                        return <button key={tag}>{tag}</button>
                    })
                }
            </div>

            <div className="note-footer">
                <small>Created on {note.date}</small>
                <small>{note.priority}</small>
                <div className="note-options">
                    {
                        location.pathname === "/notes" && <span className="material-symbols-outlined" onClick={handleEdit}>
                            edit
                        </span>
                    }

                    {
                        archives.some((not) => not._id === note._id) ? <span className="material-symbols-sharp" onClick={restArchive}>
                            archive
                        </span> : <span className="material-symbols-outlined" onClick={handleArchive}>
                            archive
                        </span>
                    }
                    {
                        trash.some((not) => not._id === note._id) ? <span className="material-symbols-sharp" onClick={restTrash}>
                            delete
                        </span> : <span className="material-symbols-outlined" onClick={handleTrash}>
                            delete
                        </span>
                    }


                    <span className="material-symbols-outlined" onClick={delNotes}>
                        delete_forever
                    </span>
                </div>
            </div>

        </div>

        <ToastContainer />
    </>
}