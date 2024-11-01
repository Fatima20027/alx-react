import holbertonLogo from './Holberton-logo.jpg';
import './App.css';
import React from 'react';
import { getFullYear, getFooterCopy } from '../utils';


function App() {
  const isIndex = true;
  return (
    <div className="App">
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo"/>
        <h1>
        School dashboard
        </h1>
      </div>
      <hr/>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email: </label>
        <input type="email"/>
        <label htmlFor="password"> Password: </label>
        <input type="password"/>
        <button>OK</button>

        

      </div>
      <hr/>

      <div className="App-footer">
        
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>

      </div>
      
      
    </div>    
  );
}

export default App;
