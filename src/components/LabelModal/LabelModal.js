

import { useState } from "react"
import { loadTags, removeTags, setAllTags } from "../../features/notesSlice";
import "./LabelModal.css";
import { useDispatch, useSelector } from "react-redux";

export const LabelModal = ({ show, setShow }) => {

    const [tags, setTags] = useState([]);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { labels, allTags } = useSelector((state) => state.notes)



    const handleAdd = () => {
        if (input && !tags.includes(input)) {
            setTags([...tags, input]);
            setInput("");
            dispatch(setAllTags(input))
        }

    }

    const handleLabel = (tag) => {
        if (labels.includes(tag)) {
            dispatch(removeTags(tag))
        }
        else {
            dispatch(loadTags(tag));
        }
    }

    return <>
        {
            show && <div className="label-modal-container">
                <ul className="label-modal" >
                    <div className="label-header">
                        <p>Add To label</p>
                        <button><span className="material-icons-outlined" onClick={() => setShow(false)}>
                            close
                        </span></button>
                    </div>
                    {
                        allTags && allTags.map((tag) => {
                            return <li key={tag}><input type="checkbox"
                                onChange={() => handleLabel(tag)}
                                style={{ marginRight: "5px", cursor: "pointer" }}
                                checked={labels.some((el) => el === tag)} />{tag}</li>
                        })
                    }

                    <div className="label-input">
                        <input placeholder="Type your label" value={input} onChange={(e) => setInput(e.target.value)}></input>
                        <button onClick={handleAdd}>ADD</button>
                    </div>
                </ul>
            </div>
        }
    </>

}