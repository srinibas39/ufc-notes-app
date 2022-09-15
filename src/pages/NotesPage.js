import { useEffect, useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Editor } from "../components/Editor/Editor"
import { LabelModal } from "../components/LabelModal/LabelModal"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note";
import { useSelector } from "react-redux";
import { EditNotes } from "../components/EditNotes/EditNotes"
import { FilterNote } from "../components/FilterNote/FilterNote"


export const NotesPage = () => {
    const [show, setShow] = useState(false);//label
    const [notesTitle, setNotesTitle] = useState([]);
    const { notes, showEditor, showFilter } = useSelector((state) => state.notes);
    const {mode}=useSelector((state)=>state.mode)

    useEffect(() => {
        if (notes.length) {
            const title = notes.map((el) => el.noteTitle);
            setNotesTitle(title);
        }
    }, [notes])



    const getPinnedNotes = () => {
        return notes && notes.filter((note) => note.pin)
    }
    const pinnedNotes = getPinnedNotes();

    const getOtherNotes = () => {
        return notes && notes.filter((note) => !note.pin)
    }
    const otherNotes = getOtherNotes();
    
    return <div id={mode?"dark-mode":""} style={{minHeight:"100vh"}}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <AutoComplete suggestions={notesTitle} />
            <Editor setShow={setShow} />
            {
                notes.length ? <h2 className="primary-color">ALL NOTES</h2> : ""
            }

            {
                pinnedNotes.length ? <h3 className="primary-color" style={{ margin: "1rem" }}>PINNED</h3> : ""
            }

            {
                pinnedNotes && pinnedNotes.map((note) => {
                    return <Note note={note} key={note._id} />
                })
            }
            {
                otherNotes.length ? <h3 className="primary-color" style={{ margin: "1rem" }}>OTHERS</h3> : ""
            }

            {
                otherNotes && otherNotes.map((note) => {
                    return <Note note={note} key={note._id} />
                })
            }
        </div>
        {
            show && <LabelModal show={show} setShow={setShow} />
        }

        {
            showEditor && <EditNotes show={show} setShow={setShow} />
        }
        {
            showFilter && <FilterNote />
        }
    </div>
}