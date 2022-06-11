
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"

export const LabelPage = () => {
    return <>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 className="primary-color">LABEL 1</h2>
            <Note />
            <h2 className="primary-color">LABEL 2</h2>
            <Note />
            <h2 className="primary-color">LABEL 3</h2>
            <Note />
        </div>
    </>
}
