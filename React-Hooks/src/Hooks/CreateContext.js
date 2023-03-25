import { useState, createContext, useContext } from "react";
// Hi

const UserContext = createContext();

export function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <div className="p-5">
      <UserContext.Provider value={user}>
        <h1>3. React useContext Hook</h1>
        <p>React Context is a way to manage state globally.</p>
        <h1>{`Hello ${user}!`}</h1>
        <Component5 />
      </UserContext.Provider>
    </div>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
