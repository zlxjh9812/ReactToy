import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CleanUp  from './CleanUp';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <CleanUp/>
  </React.StrictMode>,
  document.getElementById("root")
);


