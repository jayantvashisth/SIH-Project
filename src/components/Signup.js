import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import passwordContext from '../context/passwordContext';
import pic1 from "../context/uploads/1647957662017.png"
import pic2 from "../context/uploads/1647957662014.png"
import pic3 from "../context/uploads/1647957662012.png"
import pic4 from "../context/uploads/1647957662005.png"
import pic5 from "../context/uploads/1647957662003.png"
import pic6 from "../context/uploads/1647957661999.png"
import pic7 from "../context/uploads/1647957542772.png"
import pic8 from "../context/uploads/1647957542766.png"
import pic9 from "../context/uploads/1647957542764.png"
import pic10 from "../context/uploads/1647957542760.png"
import pic11 from "../context/uploads/1647957542758.png"
import pic12 from "../context/uploads/1647957542749.png"
import pic13 from "../context/uploads/1647956571200.png"
import pic14 from "../context/uploads/1647956571199.png"
import pic15 from "../context/uploads/1647892577740.png"
import pic16 from "../context/uploads/1647892577739.png"
import pic17 from "../context/uploads/1647892577738.png"
import pic18 from "../context/uploads/1647892577737.png"
import pic19 from "../context/uploads/1647892577736.png"
import pic20 from "../context/uploads/1647892577735.png"
import { Signup_form } from './Signup_form';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

var photos = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20];
var passString = "";

export default function Signup() {

    const context = useContext(passwordContext);
    const { first, setfirst } = context;
    const [arr, setarr] = useState([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20]);
    // let a=[pic1,pic2,pic3];
    const [changevariableimportance, setvariable] = useState(1);


    // useEffect(() => {
    //     console.log("rendered");
    //     shuffleArray(photos)

    // }, [changevariableimportance]);           // jab jab changevariableimportance badlega tab tab page re render hoga by navneet si

    function shuffleArray(photos) {
        console.log("shuffle clicked")
        for (var i = photos.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            photos[i] = arr[j];
            photos[j] = temp;
        }
        setarr(photos)
    }
    const item1 = arr.slice(0, 4);
    const item2 = arr.slice(4, 8);
    const item3 = arr.slice(8, 12);
    const item4 = arr.slice(12, 16);
    const item5 = arr.slice(16, 20);


    const onclick = (e) => {
        console.log("clicked")
        // shuffleArray(photos);
        if (changevariableimportance == 1) {
            setvariable(0);
        }
        else if (changevariableimportance == 0) {
            setvariable(1);
        }

    }

    // using fetch api and connecting it with sign up endpoint

    let history = useHistory();
    async function postData(url = 'http://localhost:5000/user/signup') {

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'

            },
            redirect: 'follow', // manual, 
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                username: cred.username,
                email: cred.email,
                password: cred.password,
                passString: pass
            })
        });
        const reply = await response.json(); // parses JSON response into native JavaScript objects
        console.log(reply);
        if(reply.success){
            localStorage.setItem('token',reply.authToken)
            history.push("/");
        }
        else{
            alert("invalid credentials")
        }
    }

    const [cred, setcred] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [pass, setpass] = useState("")

    const onChange = (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        postData();
    }




    return (
        <div className='mt-5 container'>
            <h1 className='row justify-content-center'>Sign up page</h1>

            <form>
                <div className="mb-3">
                    <label for="exampleInputusername" className="form-label">Username</label>
                    <input type="username" className="form-control" id="exampleInputusername" name="username" value={cred.username} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cred.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={cred.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <p className='row justify-content-center'>or</p>
                    <button onClick={onclick} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Create Password
                    </button>
                </div>

                <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
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

                                    {item1.map((photo) => {
                                        return (
                                            <div className="col-md-3 ms-auto">
                                                <div className="card" >


                                                    <img src={photo} className="card-img-top" alt="..." onClick={() => {
                                                        console.log(photo.substring(14, 27));
                                                        passString += photo.substring(14, 27);
                                                        setpass(passString);
                                                    }} />


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">

                                    {item2.map((photo) => {
                                        return (
                                            <div className="col-md-3 ms-auto">
                                                <div className="card" >


                                                    <img src={photo} className="card-img-top" alt="..." onClick={() => {
                                                        console.log(photo.substring(14, 27));
                                                        passString += photo.substring(14, 27);
                                                        setpass(passString);
                                                    }} />


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">

                                    {item3.map((photo) => {
                                        return (
                                            <div className="col-md-3 ms-auto">
                                                <div className="card" >


                                                    <img src={photo} className="card-img-top" alt="..." onClick={() => {
                                                        console.log(photo.substring(14, 27));
                                                        passString += photo.substring(14, 27);
                                                        setpass(passString);
                                                    }} />


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">

                                    {item4.map((photo) => {
                                        return (
                                            <div className="col-md-3 ms-auto">
                                                <div className="card" >


                                                    <img src={photo} className="card-img-top" alt="..." onClick={() => {
                                                        console.log(photo.substring(14, 27));
                                                        passString += photo.substring(14, 27);
                                                        setpass(passString);
                                                    }} />


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">

                                    {item5.map((photo) => {
                                        return (
                                            <div className="col-md-3 ms-auto">
                                                <div className="card" >


                                                    <img src={photo} className="card-img-top" alt="..." onClick={() => {
                                                        console.log(photo.substring(14, 27));
                                                        passString += photo.substring(14, 27);
                                                        setpass(passString);
                                                    }} />


                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                                console.log(passString)
                                passString = "";
                            }}>Understood</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

