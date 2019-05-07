import React from 'react';

function Joke (props) {
    return (
        <div className='joke'>
            <p style={{display: props.question ? 'block' : 'none'}}>{props.question}</p>
            <p style={{color: !props.question && '#888'}}>{props.punchLine}</p>
            <hr/>
        </div>
    )
}
export default Joke;