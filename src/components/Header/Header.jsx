import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-custom-made-2-min.webp'
import { authContext } from '../AuthProvider/AuthProvider';
// All jewelry, My Jewelry, Add jewelry, Blogs, and User profile picture
const Header = () => {
    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='container mx-auto py-6'>
            <div className="navbar bg-neutral-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='w-1/4 px-8' src={logo} alt="" />
                    <a className="btn btn-ghost font-extrabold text-xl">DiamondCut</a>
                </div>
                {/* Large view section ------------------------------------------------------- */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 font-semibold ">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/allJewelry">All Jewelry</NavLink>
                        {
                            user &&
                            <NavLink to="/myJewelry">My Jewelry</NavLink>
                        }
                        <NavLink to="/blogs">Blogs</NavLink>
                    </ul>
                </div>

                <div className="navbar-end flex flex-row ">
                    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        {
                            user &&
                            <img className='rounded-full pe-2'
                                style={{ width: "50px", height: "50px" }}
                                src={user?.photoURL} alt="" />
                        }
                    </div>

                    {
                        user ?
                            <button onClick={handleLogOut} className="btn">Logout</button> :
                            <div className='grid grid-cols-2 divide-x'>
                                <Link to='/register'>
                                    <button className="btn btn-link text-yellow-700">Register</button>
                                </Link>
                                <Link to='/login'>
                                    <button className="btn btn-link text-yellow-700">Login</button>
                                </Link>
                            </div>
                    }
                </div>
            </div>


        </div>
    );
};

export default Header;