import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Editor } from "../components/Editor/Editor"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"

export const NotesPage = () => {
    return <>
        <NavBar />
        <AutoComplete/>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Editor />
            <h2 className="primary-color">ALL NOTES</h2>
            <Note/>
            <Note />
            <Note />
        </div>
    </>
}