import React from 'react'
import TodoItems from '../MyComponents/todoItem';
export default function todoList(props) {
    return (
        <div className = "container"> 
        <h3>Todo List</h3>
        { props.todos.length === 0 ? "Your todo list is empty": 
            props.todos.map((todo) => {
                console.log('==>!!!!!!todo ',todo);
              return  <TodoItems todo = {todo} key ={todo.srNo} DeleteIt ={props.DeleteIt}/>
            }) }
        </div>
    )
}
