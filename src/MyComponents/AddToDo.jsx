import React, { useState } from 'react'

export default function AddToDo(props) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    function add(e) {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be empty.")
        } else {
            props.addtodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className='addtodoform'>
            <h2>Add ToDo Item</h2>
            <form onSubmit={add}>
                <div className="inp">
                    <label htmlFor="title">ToDo Title:</label>
                    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} name="title" id="title" />
                </div>
                <div className="inp">
                    <label htmlFor="desc">Description:</label>
                    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)} name="desc" id="desc" />
                </div>
                <button className="btns" type='submit'>Add</button>
            </form>
        </div>
    )
}
