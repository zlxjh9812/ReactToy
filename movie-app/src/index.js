import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CleanUp  from './CleanUp';
import ToDoList from './ToDoList'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <CleanUp/>
    <hr/>
    <ToDoList/>
  </React.StrictMode>,
  document.getElementById("root")
);


