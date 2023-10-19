import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CleanUp  from './CleanUp';
import ToDoList from './ToDoList'
import CoinTracker from './coinTracker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <CleanUp/>
    <hr/>
    <ToDoList/>
    <hr/>
    <CoinTracker/>
  </React.StrictMode>,
  document.getElementById("root")
);


