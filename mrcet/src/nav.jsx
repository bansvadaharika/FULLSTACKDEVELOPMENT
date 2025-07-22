import React from "react";
import{ Link } from "react-router-dom";
function Navbar(){
    return<nav>
        <ul>
            <li>
                <Link to ='/home'>
                HOME
                </Link>
            </li>
            <li>
                <Link to ='/about'>
                ABOUT
                </Link>
            </li>
            <li>
                <Link to ='/contact'>
                CONTACT
                </Link>
            </li>
        </ul>
    </nav>
}