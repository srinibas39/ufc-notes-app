
import { ColorPalette } from "../colorPalette/ColorPalette"
import "./Editor.css"
export const Editor = () => {
    return <div className="editor">
        <div className="editor-header">
            <input type="text" placeholder="Type Title of the Note" />
            <span class="material-symbols-outlined">
                push_pin
            </span>
        </div>
        <div className="editor-body">
            <textarea placeholder="Type Body of the Text"></textarea>
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
                <span class="material-symbols-outlined">
                    check_circle
                </span>
                <ColorPalette/>
                <span class="material-symbols-outlined">
                    label
                </span>
            </div>
        </div>
    </div>
}