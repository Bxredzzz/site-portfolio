// components/Menu.js
import { useState, useEffect } from 'react';
import '../globals.css'; 

export default function Menu() {
    const [showButtons, setShowButtons] = useState(false);



    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };

    return (

        <div className="menuContainer">
            <button className="btn menuButton" onClick={handleButtonClick}>
                <span className="icon">
                    <svg viewBox="0 0 175 80" width="40" height="40">
                        <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                        <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                    </svg>
                </span>
                <span className="text">MENU</span>
            </button>
            <div className="buttonContainer">
                {showButtons && (
                    <>
                        <a href="#root" className="button "><h1 className='textMenu'>Présentation</h1></a>
                        < a href="#c" className="button "><h1 className='textMenu'>Compétences</h1></a>
                        < a href="#q" className="button "><h1 className='textMenu'>Qualités</h1></a>
                        < a href="#cv" className="button "><h1 className='textMenu'>CV</h1></a>
                    </>
                )}
            </div>
        </div>
    );
}
