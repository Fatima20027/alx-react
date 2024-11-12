import React from 'react';
import PropTypes from 'prop-types';


function NotificationItem({type, html, value}){
  return (
    <i data-notification-type={type} {...(html ? { dangerouslySetInnerHTML: { __html: html } } : {})}>
      {value}
    </i>  
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.string,
};

// Define default props
NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},

};

export default NotificationItem;