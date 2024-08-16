import React from 'react'
import ReactDOM from 'react-dom'

// this const page is a javascript object which is specific in JSX

const page = (
    <div>
        <h1>This is a test page: </h1>
        <h3>I am Devansh</h3>
        <ol>
            <li>I study at NIT KKR</li>
            <li>I am in Second Year, 3rd Semester</li>
        </ol>
    </div>
);
// <></> : are called fragments and can be used to wrap our code around in jsx
const slides  = (
    <div>
        <img src="./src/assets/react-logo.png" alt="React" width="100px"/>
        <h1>Fun Facts about React:</h1>
        <ol>
            <li>This is React</li>
            <li>Yess</li>
            <li>Okk</li>
            <li>what's happening</li>
        </ol>
    </div>
);

// to make it a component just make it like in a Pascal case instead of camel case and call it like <Temp/> like HTML brackets
function temp(){
    return (
        <>
            <img src="./src/assets/react-logo.png" alt="React" width="100px"/>
        <h1>Fun Facts about React:</h1>
        <ol>
            <li>This is React</li>
            <li>Yess</li>
            <li>Okk</li>
            <li>what's happening</li>
        </ol>
        </>
    );
}

function Temp(){
    return (
        <>
        <header>
            <nav>
                <img src="./src/assets/react-logo.png" alt="React" width="100px"/>
            </nav>
        </header>
            
        <h1>Fun Facts about React:</h1>
        <ol>
            <li>This is React</li>
            <li>Yess</li>
            <li>Okk</li>
            <li>what's happening</li>
        </ol>
        <footer>
            <small>
                © 2024 Devansh . All rights reserved.
            </small>
        </footer>
        </>
    );
}

// ReactDOM.render(temp(), document.getElementById("root"));
ReactDOM.render(<Temp/>, document.getElementById("root"));