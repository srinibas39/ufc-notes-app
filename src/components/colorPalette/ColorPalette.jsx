import { useState } from "react";
import "./ColorPalette.css";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../features/notesSlice";
import { setDarkMode } from "../../features/modeSlice";

export const ColorPalette = () => {
  const [colors, setColors] = useState(false);
  const row1 = ["color1", "color2", "color3"];
  const row2 = ["color4", "color5", "color6"];
  const row3 = ["color7", "color8", "color9"];

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);

  const handleColors = (el) => {
    dispatch(setDarkMode(""));
    dispatch(setColor(el));
  };

  return (
    <>
      <span
        className="material-symbols-outlined"
        onClick={() => setColors(!colors)}
      >
        palette
      </span>

      {colors && (
        <div
          className="colors"
          id={mode ? "dark-mode" : ""}
          onMouseLeave={() => setColors(false)}
        >
          <div className="row">
            {row1.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className={el}
                  onClick={() => handleColors(el)}
                ></div>
              );
            })}
          </div>
          <div className="row">
            {row2.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className={el}
                  onClick={() => handleColors(el)}
                ></div>
              );
            })}
          </div>
          <div className="row">
            {row3.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className={el}
                  onClick={() => handleColors(el)}
                ></div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
