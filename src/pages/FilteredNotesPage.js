import { useSelector } from "react-redux"
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note"
import { useNavigate } from "react-router-dom"




export const FilteredNotesPage = () => {
    const navigate = useNavigate();
    const { notes, filter, searchFilter } = useSelector((state) => state.notes);
    const { mode } = useSelector((state) => state.mode)



    const getFilteredNotes = () => {
        if (searchFilter) {
            return notes.filter((el) => el.noteTitle === searchFilter);

        }
        else if (filter.priorityFilter.length) {

            return notes.filter((note) => filter.priorityFilter.includes(note.priority))
        }
        else if (filter.labelFilter.length) {

            return notes.filter((note) => note.tags.some((el) => filter.labelFilter.includes(el)))
        }

        else {
            return notes;
        }
    }

    const filteredNotes = getFilteredNotes();

    const getSortedNotes = () => {
        if (filter.sort === "Newest First") {
            return filteredNotes.slice(0).reverse();
        }
        else {
            return filteredNotes;
        }
    }
    const sortedNotes = getSortedNotes();


    return <div id={mode ? "dark-mode" : ""} style={{ minHeight: "100vh" }}>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <button className="btn-home" onClick={() => navigate("/notes")} >Return to Home</button>
            <h2 className="primary-color">FILTERED NOTES</h2>
            {
                sortedNotes.length ? sortedNotes.map((note) => {
                    return <Note note={note} key={note._id} />
                }) : ""
            }

            {
                !notes.length && <p style={{ margin: "1rem", color: "#d20a0a" }}>No Notes available!!</p>
            }

        </div>
    </div>
}