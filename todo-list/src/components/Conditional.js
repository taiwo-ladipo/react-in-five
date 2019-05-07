import React from 'react';

function Conditional (props) {
    return (
        <div className='profile'>
            <h2>{props.isLoading ? <span>Please wait...<i className="fa fa-spinner fa-pulse fa-fw"></i></span> : 'Welcome user'}</h2>
        </div>
    )
}

export default Conditional;