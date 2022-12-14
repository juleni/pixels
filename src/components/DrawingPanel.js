import React, { useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "../styles/drawingPanel.scss";
import Row from "./Row";

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;
  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button className="button" onClick={() => exportComponentAsPNG(panelRef)}>
        Export as PNG
      </button>
    </div>
  );
}
