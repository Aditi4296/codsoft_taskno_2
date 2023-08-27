import React, { useContext } from 'react';
import "./navbar.css";
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';

const Navbar = ()=> {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color: 'inherit', textDecoration:"none"}}>
                <span className="logo">InnSight</span>
                </Link>
                <div className="logoContain">
                    {user ? user.username : (<div className="navItems">
                    <button className="navButtons">Register</button>
                    <button className="navButtons">Login</button>
                </div>
                )} |<Link to="/login">Logout</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar