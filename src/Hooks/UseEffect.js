import React from "react";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  // });                  //Runs on every render
  //   }, []);            //Runs only on the first render
  // }, [prop, state]);   //Runs on the first render  || And any time any dependency value changes

  return (
    <div className="useeffect px-5">
      <h1>2. UseEffect Hooks Example:</h1>
      <p>The useEffect Hook allows you to perform side effects in your components.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click Me!</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default UseEffect;
