import './App.css';
import Header from './MyComponents/header';
import Footer from './MyComponents/footer';
import TodoList from './MyComponents/todoList'
import React ,{useState,useEffect} from 'react';
import AddTodo from './MyComponents/AddTodoList';
import { About } from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
var initialize=[];
  if(localStorage.getItem("todos")=== null){
    initialize = [];
  } else{
    initialize = JSON.parse(localStorage.getItem("todos"));
  }

const addTodo = (title,disc) => {
console.log('==> added todo is ',title,disc);
let srNo = todos[todos.length-1].srNo+1;
var myTodo = {
    "srNo":srNo,
    "Title":title,
    "Description":disc
  }


console.log('==>myTodo',myTodo);
setTodos([...todos,myTodo])
localStorage.setItem('todos',JSON.parse("todos"));
}

  const [todos, setTodos] = useState([initialize]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

const DeleteIt = (todo) => {
  console.log('==> I am delete function',todo);
  setTodos(todos.filter((e) => {
    return e!==todo;
  }))
  localStorage.setItem('todos',JSON.parse("todos"));
}
  return (
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} DeleteIt={DeleteIt} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
