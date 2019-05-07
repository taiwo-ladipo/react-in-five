import React from 'react';

function Header () {
    return (
        <header className='navbar'>
            <div className="image">
                <img
                    src={require("../images/troll-face.png")}
                    // src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?"
                    height="80"
                    width="80"
                />
            </div>
            <div className="nav-title">
                <p>Meme Generator</p>
            </div>
        </header>
    )
}

export default Header;