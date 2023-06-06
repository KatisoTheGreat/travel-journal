import React from "react";
import logo from "../images/logo.png"
import "../style.css"

function Navbar() {
    return(
        <nav>
            <img src={logo} alt="" className="logo"/>
            <h4 className="title">My Travel Journal</h4>
        </nav>
    )
}

export default Navbar