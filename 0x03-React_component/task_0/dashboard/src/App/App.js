import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';


class App extends Component{
  render() {
    return (
      <>
        <Notifications />
        <Header />
        <hr/>
        <Login />
        <hr/>
        <Footer />
      </>
    );
  }

}

export default App;

