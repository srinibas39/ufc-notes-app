import { useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Editor } from "../components/Editor/Editor"
import { LabelModal } from "../components/LabelModal/LabelModal"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note";
import { useSelector } from "react-redux";


export const NotesPage = () => {
    const [show, setShow] = useState(false);
    const { notes } = useSelector((state) => state.notes);
    return <>
        <NavBar />
        <AutoComplete />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Editor setShow={setShow} />
            {
                notes.length ? <h2 className="primary-color">ALL NOTES</h2>:""
            }

            {
                notes && notes.map((note) => {
                    return <Note note={note} key={note._id} />
                })
            }
        </div>

        <LabelModal show={show} setShow={setShow} />
    </>
}