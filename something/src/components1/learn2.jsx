import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';

import Navbar from "./navbar";
import Main from "./main";

function Content(){
    return (
        <>
        <Navbar/>
        <Main/>
        </>

    );
}

// document.createElement('div', id = 'val');
ReactDOM.render(<Content/>, document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Content/>);
