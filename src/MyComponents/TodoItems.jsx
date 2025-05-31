import React from 'react'

export default function TodoItems({ todo, ondelete }) {
    return (
        <div className='todoitem'>
            <div className="heatit">
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
            </div>
            <button className="redbtns btns" onClick={() => ondelete(todo)}>Delete</button>
        </div>
    )
}