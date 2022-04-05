import './App.css';
import React, { useState } from "react";
import Modal from "./components/Modal"
import Signup from './components/Signup';
import PasswordState from './context/passwordState';


function App() {

  /*
  
  const [first, setfirst] = useState("");

  // Example POST method implementation:
  async function postData(url = 'http://localhost:5000/upload/getimages') {
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ username: "jake" }) // body data type must match "Content-Type" header
    });
    const photu = await response.json(); // parses JSON response into native JavaScript objects
    console.log(photu);
    const array = photu.split(",");
    console.log(array);
    let temp2 = Math.floor(Math.random() * 6);
    setfirst(array[temp2]);
    console.log(first);
    // let temp = "http:\\localhost:5000\\"
    console.log("http:\\\\localhost:5000\\" + first);

  }


  const onclick = (e) => {

    postData();
  }


*/

  return (
    <>
      {/* <button className="btn" onClick={onclick}>click me </button> */}
      {/* <img src={`http:\\\\localhost:5000\\` + first} alt="no internet" /> */}
      <PasswordState>

        <Signup />
      </PasswordState>

    </>
  );
}

export default App;

