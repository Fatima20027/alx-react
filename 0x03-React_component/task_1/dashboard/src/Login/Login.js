import './Login.css';
import React from 'react';



function Login() {
  return (
    <div className="Login">

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email: </label>
        <input type="email"/>
        <label htmlFor="password"> Password: </label>
        <input type="password"/>
        <button>OK</button>
      </div>

    </div>    
  );
}

export default Login;
