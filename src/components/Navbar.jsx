import React,{useState} from "react";
import {Link} from  "react-router-dom";
import "./styles/Navbar.css"
export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;