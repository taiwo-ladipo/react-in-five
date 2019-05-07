import React from 'react';
import TodoItem from "./TodoItem";

function MyInfo () {
    return (
        <div className='profile'>
            <h1>Hi, my name is Taiwo</h1>
            <p>I am a Software Engineer. I love reading, singing and cooking. My top 3 vacation destinations are:</p>
            <ol>
                <li>Zanzibar</li>
                <li>South Korea</li>
                <li>Germany</li>
            </ol>
            <p>Here are my goals for today:</p>

            <div className='todo-list'>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    )
}

export default MyInfo;