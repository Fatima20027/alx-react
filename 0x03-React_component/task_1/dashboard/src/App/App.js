import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  // Event handler for keydown event
  handleKeyDown = (event) => {
    // Check if Control and H are pressed simultaneously
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut(); // Call the logOut function passed in as a prop
    }
  };

  componentDidMount() {
    // Add the event listener when the component is mounted
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </>
    );
  }
}

// Define prop types
App.propTypes = {
  logOut: PropTypes.func.isRequired,
};

export default App;
