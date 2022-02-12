import React from "react";
import "./styles/style.css";
import { Header } from "./components/header";
import { DragDrop } from "./components/drag_drop";

export default function App() {

  return (
    <div>
      <div className="container">
        <Header />
        <DragDrop />
        
      </div>

     
    </div>
  );
}
