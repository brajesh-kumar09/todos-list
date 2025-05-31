import './App.css';
import Header from './MyComponents/Header';
import ToDos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddToDo from './MyComponents/AddToDo';
import About from './MyComponents/about';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let inittodo = [];
  if (localStorage.getItem("todos")) {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  function ondelete(todo) {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addtodo(title, desc) {
    let sno = todos.length === 0 ? 0 : todos.length;
    let nyatodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, nyatodo]);
  }

  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className='bodi'>
                <p>Welcome to My App</p> <hr />
                <AddToDo addtodo={addtodo} /> <hr />
                <ToDos todos={todos} ondelete={ondelete} />
              </div>
            }
          />
          <Route path="/about" element={<div className='bodi'><About /></div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
