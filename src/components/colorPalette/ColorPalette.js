import { useState } from "react"
import "./ColorPalette.css"
export const ColorPalette = () => {

    const [colors, setColors] = useState(false);
    // 1const { dispatch } = useFilter();
    const row1 = ["color1", "color2", "color3"]
    const row2 = ["color4", "color5", "color6"]
    const row3 = ["color7", "color8", "color9"]

    return <>
        {/* onMouseEnter={() => setColors(true)} onMouseLeave={() => setColors(false)} */}
        <span className="material-icons-outlined color-icon" onClick={() => setColors(!colors)} >
            palette
        </span>

        {
            // onMouseEnter={() => setColors(true)} onMouseLeave={() => setColors(false)}
            colors && <div className="colors" >
                <div className="row">
                    {
                        row1.map((el, idx) => {
                            // onClick={() => dispatch({ type: "SELECT_COLOR", payload: el })}
                            return <div key={idx} className={el}></div>
                        })
                    }
                </div>
                <div className="row">
                    {/* onClick={() => dispatch({ type: "SELECT_COLOR", payload: el })} */}
                    {
                        row2.map((el, idx) => {
                            return <div key={idx} className={el}></div>
                        })
                    }
                </div>
                <div className="row">
                    {

                        row3.map((el, idx) => {
                            // onClick={() => dispatch({ type: "SELECT_COLOR", payload:  el  })}
                            return <div key={idx} className={el} ></div>
                        })
                    }
                </div>


            </div>

        }
    </>
}

