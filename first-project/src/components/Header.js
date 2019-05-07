import React from 'react';

function Header () {
    let date = new Date(),
        time = date.getHours(),
        period = 'day',
        styles = {
            letterSpacing: 1.5
        };

    if (time < 12) {
        period = 'morning';
        styles.color = '#fff';
    } else if  (time >= 12 && time <17) {
        period = 'afternoon';
        styles.color = 'yellow';
    } else {
        period = 'evening';
        styles.color = '#ccc';
    }
    return (
        <header className='navbar'>
            <h1 style={styles}> Good {period}, Welcome to my world!!!</h1>
        </header>
    )
}

export default Header;