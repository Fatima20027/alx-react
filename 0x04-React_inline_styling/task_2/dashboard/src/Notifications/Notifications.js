import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  Notifications:{
    border: "1.5px dashed crimson",
    padding: "10px",
    fontSize: "1.5rem",
  }

})

export default function Notifications(){
  return(
    <div className={css(styles.Notifications)}>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default" style={{color: "blue",}}>New course available</li>
        <li data-priority="urgent" style={{color: "red",}}>New resume available</li>
        <li data-priority="urgent" style={{color: "red"}} dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
      <button style={{float: 'right', position: 'absolute', right: '13px', top: '13px', fontSize: '14px', border: 'none' , backgroundColor: 'transparent' , cursor: 'pointer'}} 
      aria-label="Close"
      onClick={
        console.log('Close button has been clicked')
      }>
        <img src={closeIcon} alt="closeicon"/>
      
      </button>
    </div>
  )
}