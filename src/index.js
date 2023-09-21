import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd";
import {
  MultiBackend,
  TouchTransition,
  MouseTransition,
} from "react-dnd-multi-backend";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import "./index.css";
import App from "./App";

const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend,
      transition: MouseTransition,
    },
    {
      backend: TouchBackend,
      transition: TouchTransition,
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DndProvider backend={MultiBackend} options={HTML5toTouch}>
    <App />
  </DndProvider>
);
