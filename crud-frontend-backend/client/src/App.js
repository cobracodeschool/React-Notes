import "./App.css";
import axios from "axios";
import {useState} from "react"

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const formHandle = async (e) => {
    e.preventDefault()
    const data = { userName, password, email, phoneNumber };
    await axios.post("http://localhost:5000/", data)
    .then(() => {
      console.log("Data Submitted Successfully")
    })
    .catch((err) => {
      console.log(err)
    });

  };
  return (
    <div className="App p-5">
      <form onSubmit={formHandle} className="d-flex justify-content-center align-items-center">
       <div className="d-flex justify-content-center align-items-center flex-column gap-2 w-50">
       <input className="rounded" type="text" placeholder="User Name" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
        <input className="rounded" type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <input className="rounded" type="text" placeholder="Email" value={email} onChange={(e) => {setMail(e.target.value)}}/>
        <input className="rounded" type="text" placeholder="Phone number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
        <button className="rounded" type="submit">Submit</button>
       </div>
      </form>
    </div>
  );
}

export default App;
