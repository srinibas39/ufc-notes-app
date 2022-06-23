import { useState } from "react";
import "./ColorPalette.css";
import { useDispatch } from "react-redux";
import { setColor } from "../../features/notesSlice";
export const ColorPalette = () => {

    const [colors, setColors] = useState(false);
    const row1 = ["color1", "color2", "color3"];
    const row2 = ["color4", "color5", "color6"];
    const row3 = ["color7", "color8", "color9"];

    const dispatch = useDispatch();
    
    const handleColors=(el)=>{
         dispatch(setColor(el))
    }

    return <>

        <span className="material-symbols-outlined" onClick={() => setColors(!colors)}>
            palette
        </span>

        {

            colors && <div className="colors" onMouseLeave={() => setColors(false)}>
                <div className="row">
                    {
                        row1.map((el, idx) => {
                            return <div key={idx} className={el} onClick={()=>handleColors(el)}></div>
                        })
                    }
                </div>
                <div className="row">

                    {
                        row2.map((el, idx) => {
                            return <div key={idx} className={el} onClick={()=>handleColors(el)}></div>
                        })
                    }
                </div>
                <div className="row">
                    {

                        row3.map((el, idx) => {

                            return <div key={idx} className={el} onClick={()=>handleColors(el)} ></div>
                        })
                    }
                </div>


            </div>

        }
    </>
}

