import React, { useState } from "react";
import { CirclePicker } from "react-color";
import "../styles/editor.scss";
import DrawingPanel from "./DrawingPanel";

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

  function changeColor(color) {
    setSelectedColor(color.hex);
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

      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}

      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
