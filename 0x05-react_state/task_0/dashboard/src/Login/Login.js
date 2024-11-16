import React from 'react';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody:{
    height: "50vh",
    fontWeight: "500",
    fontSize: "1.2rem",
    marginLeft: "3.5rem",
    paddingTop: "2.5rem",
  }
});

function Login() {
  return (
    <div className={css(styles.AppBody)}>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email"> Email: </label>
        <input type="email"/>
        <label htmlFor="password"> Password: </label>
        <input type="password"/>
        <button style={{
          marginLeft: "10px",
          borderRadius: "5px",
          border: "none",
          border: "1px solid gray",
          backgroundColor: "white",
        }}>OK</button>
      </div>

    </div>    
  );
}

export default Login;
