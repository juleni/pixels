import React from "react";
import "../styles/editor.scss";

export default function Editor() {
  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      <h2>Enter Panel Dimensions</h2>
      <div id="options">
        <div className="options">
          <input
            type="number"
            className="panelInput"
            defaultValue="16" // onChange={}
          />
          <span>Width</span>
        </div>
        <div className="options">
          <input
            type="number"
            className="panelInput"
            defaultValue="16" // onChange={}
          />
          <span>Height</span>
        </div>
      </div>

      <button className="button">START DRAWING</button>
    </div>
  );
}
