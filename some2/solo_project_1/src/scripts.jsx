import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./MainContent";

function App(){
    return (
        <>
            <MainContent/>
        </>
    );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>);