import React, { useEffect, useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar() {
    const [changevariableimportance, setvariable] = useState(1);
    const [second, setsecond] = useState(0);
    

    let history = useHistory();
    let location = useLocation();
    const logout = () => {
        localStorage.removeItem('token')
        history.push("/login");

        if (changevariableimportance == 1) {
            setvariable(0);
        }
        else if (changevariableimportance == 0) {
            setvariable(1);
        }
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Dear Diary</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/" ? "active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ?
                        
                            <form className='d-flex'>
                                 <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                 <Link className="nav-link active" aria-current="page" to="/signup">Sign Up</Link>
                            </form> : <button className='btn btn-primary' onClick={logout}>Logout </button>
                        }




                    </div>
                </div>
            </nav>
        </div>
    );
}
