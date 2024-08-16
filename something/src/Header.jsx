import React from 'react';
import ReactDOM from 'react-dom'
// either use export default here or at the end
export default function Header(){
    return (
        <header>
            <nav className='nav'>
                <img src="./src/assets/react-logo.png" alt="React" className='logo'/>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}
// export default Header;