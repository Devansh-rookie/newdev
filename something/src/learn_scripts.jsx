import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
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

function MainPage(){
    return (<>
        <Header />
        <Content />
        <Footer />
    </>)
}


// ReactDOM.render(temp(), document.getElementById("root"));
// in case of multiple renderes to the same element only the lsat one that is the 
ReactDOM.render(<MainPage/>, document.getElementById("root"));