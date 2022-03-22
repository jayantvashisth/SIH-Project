import './App.css';
import React, { useState } from "react";
import Modal from "./components/Modal"


function App() {
  // document.querySelector('.passimg').addEventListener('click', () => {
  //   // display popup
  // })
  
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
      body: JSON.stringify({ username: "computer" }) // body data type must match "Content-Type" header
    });
    const photu = await response.json(); // parses JSON response into native JavaScript objects
    console.log(photu);
    const array = photu.split(",");
    console.log(array);
    setfirst(array[0]);
    console.log(first);

  }

  
  const onclick = (e)=>{
    
    postData();
  }




  return (
    <>
      <button className="btn" onClick={onclick}>click me </button>
      <img src="http\\localhost:5000\"{...first}  alt="no internet" />  

      <Modal/>

    </>
  );
}

export default App;

