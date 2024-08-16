// // Just put what and where
// ReactDOM.render(<h1>Hello Everyone!
//     <ul>
//         <li>
//         <ol>
//             <li>One</li>
//             <li>Two</li>
//         </ol>
//         </li>
//         <li>
//         <ol>
//             <li>I</li>
//             <li>II</li>
//         </ol>
//         </li>
//     </ul>
// </h1>, document.getElementById("hello"));

// ReactDOM.render(<h1>Hi</h1>, document.getElementById("yes"));
// // const ele = document.createElement("abc");
// // ReactDOM.render(<h1>Hi</h1>, document.getElementById("abc"));

const navbar = (
    <nav>
        <h1>
            List
        </h1>
        <ul>
            <li>
                Pricing
            </li>
            <li>
                About
            </li>
            <li>
                Contact
            </li>
        </ul>
    </nav>
);
ReactDOM.render(navbar,document.getElementById("hello"));