
import "./Note.css"
export const Note = ({ note }) => {
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
                <span class="material-symbols-outlined">
                    archive
                </span>
                <span class="material-symbols-outlined">
                    delete
                </span>
                <span class="material-symbols-outlined">
                    delete_forever
                </span>
            </div>
        </div>

    </div>
}