
import "./Note.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteArchive, deleteNote, deleteTrash, loadArchive, loadTrash, restoreArchive, restoreTrash, setShowEditor, updateNote } from "../../features/notesSlice";
import { useLocation } from "react-router-dom";
export const Note = ({ note }) => {

    const { token } = useSelector((state) => state.auth);
    const { archives, trash } = useSelector((state) => state.notes);


    const dispatch = useDispatch();
    const location = useLocation();


    const handleArchive = () => {
        dispatch(loadArchive({ token, note, noteId: note._id }))
    }
    const handleTrash = () => {
        dispatch(loadTrash({ token, note, noteId: note._id }))
    }

    const restArchive = () => {
        dispatch(restoreArchive({ token, noteId: note._id }))
    }
    const restTrash = () => {
        dispatch(restoreTrash({ token, noteId: note._id }))
    }
    const delNotes = () => {
        if (location.pathname === "/archive") {
            dispatch(deleteArchive({ token, noteId: note._id }))
        }
        if (location.pathname === "/trash") {
            dispatch(deleteTrash({ token, noteId: note._id }))
        }
        if (location.pathname === "/notes") {
            dispatch(deleteNote({ token, noteId: note._id }))
        }
    }
    const handleEdit = () => {
        // dispatch(updateNote({ token, note, noteId: note._id }))
        dispatch(setShowEditor(true))
    }


    return <div className={`note ${note.color}`}>
        <div className="note-header">
            <h3>{note.noteTitle}</h3>
            <span class="material-symbols-outlined">
                push_pin
            </span>
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
                <span class="material-symbols-outlined" onClick={handleEdit}>
                    edit
                </span>
                {
                    archives.some((not) => not._id === note._id) ? <span class="material-symbols-sharp" onClick={restArchive}>
                        archive
                    </span> : <span class="material-symbols-outlined" onClick={handleArchive}>
                        archive
                    </span>
                }
                {
                    trash.some((not) => not._id === note._id) ? <span class="material-symbols-sharp" onClick={restTrash}>
                        delete
                    </span> : <span class="material-symbols-outlined" onClick={handleTrash}>
                        delete
                    </span>
                }


                <span class="material-symbols-outlined" onClick={delNotes}>
                    delete_forever
                </span>
            </div>
        </div>

    </div>
}