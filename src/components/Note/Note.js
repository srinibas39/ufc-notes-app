
import "./Note.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteArchive, loadArchive, restoreArchive } from "../../features/notesSlice";
import { useLocation } from "react-router-dom";
export const Note = ({ note }) => {

    const { token } = useSelector((state) => state.auth);
    const { archives } = useSelector((state) => state.notes);


    const dispatch = useDispatch();
    const location = useLocation();

    const handleArchive = () => {
        dispatch(loadArchive({ token, note, noteId: note._id }))
    }
    const restArchive = () => {
        dispatch(restoreArchive({ token, noteId: note._id }))
    }
    const delNotes = () => {
        if (location.pathname === "/archive") {
            dispatch(deleteArchive({ token, noteId: note._id }))
        }
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
                <span class="material-symbols-outlined">
                    edit
                </span>
                {
                    archives.some((not) => not._id === note._id) ? <span class="material-symbols-sharp" onClick={restArchive}>
                        archive
                    </span> : <span class="material-symbols-outlined" onClick={handleArchive}>
                        archive
                    </span>
                }

                <span class="material-symbols-outlined">
                    delete
                </span>
                <span class="material-symbols-outlined" onClick={delNotes}>
                    delete_forever
                </span>
            </div>
        </div>

    </div>
}