
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"

export const ArchivePage = () => {
    return <>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 className="primary-color">ARCHIVES</h2>
            <Note />
            <Note />
            <Note />
        </div>
    </>
}