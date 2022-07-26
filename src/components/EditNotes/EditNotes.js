
import { Editor } from "../Editor/Editor";
import "./EditNotes.css";
import { useDispatch } from "react-redux";
import { setShowEditor } from "../../features/notesSlice";

export const EditNotes = ({show ,setShow}) => {
    
    const dispatch = useDispatch();
    const handleEditor = () => {
        dispatch(setShowEditor(false))
    }
    return <div className="edit-note-container" onClick={handleEditor}>
        <Editor show={show} setShow={setShow}/>
    </div>
}