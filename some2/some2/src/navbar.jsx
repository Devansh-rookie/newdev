import React from "react";
import reactLogo from "./assets/reactLogo.png"
function Navbar(){
    return (
        <nav className="navbar">
            {/* <img src="reactLogo.png" alt="React" /> */}
            <img src={reactLogo} className="logo-react" alt="React logo" />
            <h3>React Facts</h3>
            <h4>React Course Project 1</h4>

            {/* <h1>Navbar goes here</h1> */}
        </nav>
        
    );
}

export default Navbar;