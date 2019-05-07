import React from 'react';

function TodoItem (props){
    let style = {};
    if (props.todo.completed) {
        style.textDecorationLine = 'line-through';
        style.color = '#888';
        style.fontStyle = 'italic';
    }
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                checked={props.todo.completed}
                id={props.todo.id}
                onChange={() => props.handleChange(props.todo.id)}
            />
            <label htmlFor={props.todo.id} style={style}>{props.todo.text}</label>
        </div>
    )
}

export default TodoItem;