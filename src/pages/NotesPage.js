import { useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Editor } from "../components/Editor/Editor"
import { LabelModal } from "../components/LabelModal/LabelModal"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"


export const NotesPage = () => {
    const [show,setShow]=useState(false)
    return <>
        <NavBar />
        <AutoComplete/>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Editor setShow={setShow} />
            <h2 className="primary-color">ALL NOTES</h2>
            <Note/>
            <Note />
            <Note />
        </div>
        
        <LabelModal show={show} setShow={setShow}/>
    </>
}