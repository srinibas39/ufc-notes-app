import { ColorPalette } from "../colorPalette/ColorPalette"
import "./Note.css"
export const Note = () => {
    return <div className="note">
        <div className="note-header">
            <h3>Title of the Note</h3>
            <span class="material-symbols-outlined">
                push_pin
            </span>
        </div>
        <div className="note-body">
            Body of the Note
        </div>
        <div className="note-tags">
            <button>tag1</button>
            <button>tag2</button>
            <button>tag2</button>
        </div>

        <div className="note-footer">
            <small>Created on 26/10/2021</small>
            <small>High prority</small>
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