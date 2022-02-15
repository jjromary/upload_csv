import React from "react";
import "./styles/global.scss";
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
