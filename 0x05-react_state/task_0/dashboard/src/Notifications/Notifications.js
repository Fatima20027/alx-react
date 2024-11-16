import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  Notifications:{
    border: "1.5px dashed crimson",
    padding: "10px",
    fontSize: "1.5rem",
  }

})

export default function Notifications({
  displayDrawer = false,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
}){

  return(
    <>
      {!displayDrawer && (<p onClick={handleDisplayDrawer}>Your notifications</p>)}


      {!displayDrawer && (
        <div className={css(styles.Notifications)}>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default" style={{color: "blue",}}>New course available</li>
          <li data-priority="urgent" style={{color: "red",}}>New resume available</li>
          <li data-priority="urgent" style={{color: "red"}} dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
        <button onClick={handleHideDrawer} style={{float: 'right', position: 'absolute', right: '13px', top: '13px', fontSize: '14px', border: 'none' , backgroundColor: 'transparent' , cursor: 'pointer'}} 
        aria-label="Close">
          <img src={closeIcon} alt="closeicon"/>
        
        </button>
      </div>
      )}
      
    </>
    
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,

};

