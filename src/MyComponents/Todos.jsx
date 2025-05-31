import React from 'react';
import TodoItems from "./TodoItems";

export default function ToDos(props) {
    return (
        <div className="todolistContainer">
            <h2>To Dos List</h2>
            <div className="todolistItem">
                {props.todos.length === 0 ? <p id="notodoshow">No ToDos to show.</p> : props.todos.map((todo) => {
                    return <TodoItems todo={todo} key={props.sno} ondelete={props.ondelete} />
                })}
            </div>
        </div>
    )
}