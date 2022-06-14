
import { NavBar } from "../components/NavBar/NavBar"
import { Note } from "../components/Note/Note";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const LabelPage = () => {

    const { allTags, notes } = useSelector((state) => state.notes)
    return <>
        <NavBar />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 className="primary-color" style={{ marginBottom: "1rem" }}>ALL LABELS</h2>
            {
                notes.length ? allTags.map((label) => {
                    return <>
                        {
                            notes.some((el) => el.tags.some((ele) => ele === label)) &&
                            <h2 className="primary-color" style={{ textTransform: "uppercase" }} key={label}>{label}</h2>

                        }
                        {
                            notes && notes.map((note) => {
                                if (note.tags.includes(label)) {
                                    return <Note key={note._id} note={note} />
                                }
                            })
                        }
                    </>
                }) : ""
            }
        </div>
    </>
}
