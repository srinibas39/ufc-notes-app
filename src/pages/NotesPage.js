import { Editor } from "../components/Editor/Editor"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"

export const NotesPage = () => {
    return <>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Editor />
            <Note />
            <Note />
            <Note />
        </div>
    </>
}