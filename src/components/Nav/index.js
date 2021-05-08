
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Jonnovative Designs</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/portfolio'>
                    <li>Portfolio</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;