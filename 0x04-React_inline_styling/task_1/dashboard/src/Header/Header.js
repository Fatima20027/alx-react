import logo from '../assets/Holberton-logo.jpg';
import './Header.css';
import React from 'react';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppHeader:{
    display: "flex",
    width: "20%",
  },

});


function Header() {
  return (
    <div className={css(styles.Header)}>
      <div className="App-header">
        <img src={logo} alt="Holberton Logo"/>
        <h1>
        School dashboard
        </h1>
      </div>      
    </div>    
  );
}

export default Header;
