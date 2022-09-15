import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"
import { useSelector } from "react-redux";


export const TrashPage = () => {
    const { trash } = useSelector((state) => state.notes);
    const { mode } = useSelector((state) => state.mode)
    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh"}}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 className="primary-color">TRASH</h2>
            {
                trash && trash.map((note) => {
                    return <Note note={note} key={note._id} />
                })
            }
        </div>
    </div>
}