import { useState } from "react";
import "./App.css";

import Homepage from "./components/Homepage";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [cursorX,setCursorX]=useState()
  const [cursorY,setCursorY]=useState()
  window.addEventListener('mousemove',e=>{
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })
  return (
    <>
      <div className="cursor" style={{
        left:cursorX + 'px',
        top:cursorY + 'px'
      }}></div>
      {/* <Navbar /> */}
      <div className="main-cont">
      <Homepage/>
      </div>
    </>
  );
}

export default App;
