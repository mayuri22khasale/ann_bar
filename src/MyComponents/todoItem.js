import React from 'react'

export default function todoItem(props) {
    return (
        <div>
            <p>Name: {props.todo.Title}</p>
            <p> Description: {props.todo.Description}</p>
            <button className = "btn btn-danger btn-sm" onClick={() => {props.DeleteIt(props.todo)}}>Delete</button>

        </div>
    )
}
