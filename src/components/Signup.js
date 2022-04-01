import React from 'react'
import { useState } from "react";


export default function Signup() {

    const [first, setfirst] = useState("");

    // Example POST method implementation:
    async function postData(url = 'http://localhost:5000/upload/getimages') {
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',

                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ username: "jake" }) // body data type must match "Content-Type" header
        });
        const photu = await response.json(); // parses JSON response into native JavaScript objects
        console.log(photu);
        const array = photu.split(",");
        console.log(array);
        let temp2 = Math.floor(Math.random() * 6);
        setfirst(array);
        console.log(first);
        // let temp = "http:\\localhost:5000\\"
        console.log("http:\\\\localhost:5000\\" + first);

    }


    const onclick = (e) => {

        postData();
    }





    return (
        <div className='mt-5 container'>
            <h1 className='row justify-content-center'>Sign up page</h1>


            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <p className='row justify-content-center'>or</p>
                    <button onClick={onclick} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Create Password
                    </button>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>





            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[0]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[1]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card">
                                            <img src={`http:\\\\localhost:5000\\` + first[2]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[3]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[4]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card">
                                            <img src={`http:\\\\localhost:5000\\` + first[5]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[4]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card" >
                                            <img src={`http:\\\\localhost:5000\\` + first[0]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                    <div className="col-md-3 ms-auto">
                                        <div className="card">
                                            <img src={`http:\\\\localhost:5000\\` + first[1]} className="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}











