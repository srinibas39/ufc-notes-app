

import "./LabelModal.css"

export const labelModal = () => {


    return <div className="label-modal-container">
        <ul className="label-modal" >
            <div className="label-header">
                <p>Add To label</p>
                <button><span className="material-icons-outlined">
                    close
                </span></button>
            </div>

            <li><input type="checkbox" style={{ marginRight: "5px", cursor: "pointer" }} />label-1</li>
            <li><input type="checkbox" style={{ marginRight: "5px", cursor: "pointer" }} />label-2</li>
            <li><input type="checkbox" style={{ marginRight: "5px", cursor: "pointer" }} />label-3</li>



            <div className="label-input">
                <input placeholder="Type your label"></input>
                <button>ADD</button>
            </div>
        </ul>
    </div>

}