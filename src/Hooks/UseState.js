import React, { useState } from "react";

export function UseState() {
  const [color, setColor] = useState("red");

  return (
    <div className="hooks p-5">
      <h1>1. useState Hooks Example:</h1>
      <p>The React useState Hook allows us to track state in a function component.</p>
      <h3 className="m-0" style={{ color: `${color}` }}>
        My favorite color is {color}!
      </h3>
      <div className="button_container py-3">
        <button type="button" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setColor("red")}>
          Red
        </button>
        <button type="button" onClick={() => setColor("pink")}>
          Pink
        </button>
        <button type="button" onClick={() => setColor("green")}>
          Green
        </button>
      </div>
    </div>
  );
}

// export function UseState1() {
//   const [color, setColor] = useState("red");

//   return (
//     <div className="hooks p-5">
//       <h1>1. useState Hooks Example:</h1>
//       <p>The React useState Hook allows us to track state in a function component.</p>
//       <h3 className="m-0" style={{ color: `${color}` }}>
//         My favorite color is {color}!
//       </h3>
//       <div className="button_container py-3">
//         <button type="button" onClick={() => setColor("blue")}>
//           Blue
//         </button>
//         <button type="button" onClick={() => setColor("red")}>
//           Red
//         </button>
//         <button type="button" onClick={() => setColor("pink")}>
//           Pink
//         </button>
//         <button type="button" onClick={() => setColor("green")}>
//           Green
//         </button>
//       </div>
//     </div>
//   );
// }