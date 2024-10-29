import holbertonLogo from './Holberton-logo.jpg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo"/>
        <h1>
        School dashboard
        </h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>

      </div>
      
      
    </div>    
  );
}

export default App;
