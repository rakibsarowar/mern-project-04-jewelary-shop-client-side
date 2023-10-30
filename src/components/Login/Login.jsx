import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import image1 from "../../assets/Login2.png"
import image2 from "../../assets/Login3.png"
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
                        <div className="text-center mt-10 mb-6">
                            <h1 className="text-4xl font-bold text-white">Login now!</h1>
                        </div>
                        <form onSubmit={handleLogin} className='px-8'>
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
                            <div className="form-control">
                                <button className="btn btn-active rounded-none border-none bg-[#b98d58] py-4">Login</button>
                            </div>
                        </form>

                    </div>
                    <div className='text-center text-white'>
                        Or,
                    </div>
                    <div className='px-16 mb-10'>
                        <button onClick={handleGoogleSignIn} className="btn btn-active rounded-none border-none bg-[#b98d58] px-24 py-4 mt-8">Google</button>
                    </div>

                    <div className="text-center text-white mb-8">
                        <h1 className="p-4">New member? <Link className='font-bold underline' to="/register">Register</Link> here</h1>
                    </div>
                    <div className='diamond-1'>
                        <img className='image-down' src={image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;