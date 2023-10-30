import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import image1 from "../../assets/Login2.png"
import "./Login.css"


const Login = () => {
    const { signIn, user, signInWithGoogle } = useContext(authContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    // sign in by email & password ------------------------------------------------------------
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                setError("");
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    // sign by google ------------------------------------------------------------
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                setError("");
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="w-full h-screen flex flex-col justify-center bg-[#3e3d52]">

                <div className="card rounded-none w-2/6 flex-shrink-0 mx-auto shadow-2xl bg-[#343242]">
                    <div className='diamond'>
                    <img src={image1} alt="" />
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email Address</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                    </div>
                    <div className='text-center'>
                        Or,
                    </div>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary m-4">Google</button>
                    <div className="text-center">
                        <h1 className="p-4">New member? <Link className='font-bold underline' to="/register">Register</Link> here</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;