import React, { useState } from "react";
import "../styles/editor.scss";

export default function Editor() {
  const DEFAULT_BUTTON_TEXT = "START DRAWING";

  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState(DEFAULT_BUTTON_TEXT);
  const [selectedColor, setSelectedColor] = useState("#f44336");

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);
    buttonText === DEFAULT_BUTTON_TEXT
      ? setButtonText("RESET")
      : setButtonText(DEFAULT_BUTTON_TEXT);
  }

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <div id="options">
          <div className="options">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className="options">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}

      <button className="button" onClick={initializeDrawingPanel}>
        {buttonText}
      </button>
    </div>
  );
}
