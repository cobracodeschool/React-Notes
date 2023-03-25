/* import "./App.css";
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
    await axios.post("http://localhost:1000/post", data)
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

export default App; */

import axios from "axios";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    phoneNumber: ""
  });

  const formHandle = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/post", { ...formData })
      .then(() => {
        console.log("Data Submitted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App p-5">
      <form
        onSubmit={formHandle}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="d-flex justify-content-center align-items-center flex-column gap-2 w-50">
          <input
            className="rounded"
            type="text"
            placeholder="User Name"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
          <input
            className="rounded"
            type="text"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            className="rounded"
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="rounded"
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <button className="rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

/* import {useState} from "react"
import axios from "axios"



export default function App() {

const [userName, setUserName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");


  const formHandler = async (e) => {
    e.preventDefault();

    const data = {userName, email, password, phoneNumber};

    await axios.post("http://localhost:1000/post" , data);
  }

  return (
    
    <div>
      
      <form onSubmit={formHandler}>
      <input type="text" placeholder='name' value={userName} onChange={(e) => {setUserName(e.target.value)}} />
      <input type="email" placeholder='email'  value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
      <input type="password" placeholder='password'  value={password}  onChange={(e) => {setPassword(e.target.value)}} />
      <input type="te" placeholder='number'  value={phoneNumber}  onChange={(e) => {setPhoneNumber(e.target.value)}}/>

      <button type="submit">Submit</button>
      </form>
    </div>
  )
} */
