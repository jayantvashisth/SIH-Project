import React ,{useState} from 'react'

export const Signup_form = () => {

    const [cred, setcred] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onChange = (e) => {
        setcred({ ...cred, [e.target.name]: e.target.value })
    }


    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="exampleInputusername" className="form-label">Username</label>
                    <input type="username" className="form-control" id="exampleInputusername" name="username" value={cred.username} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={cred.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='passwrod' value={cred.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <p className='row justify-content-center'>or</p>
                    <button onClick={onclick} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Create Password
                    </button>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
