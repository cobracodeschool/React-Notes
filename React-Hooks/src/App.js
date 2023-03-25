import React from "react";
import { Component1 } from "./Hooks/CreateContext";
import UseEffect from "./Hooks/UseEffect";
import { UseState } from "./Hooks/UseState";
// import { UseState1 } from "./Hooks/UseState";

function App() {
  return (
    <div style={{ backgroundColor: "powderBlue", height: "100vh" }}>
      <UseState />
      {/* <UseState1 /> */}
      <UseEffect />
      <Component1/>
    </div>
  );
}

export default App;
