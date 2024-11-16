import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  blue:{ 
    color: "blue",

  },

  red: {
    color: "red",
  },
});


class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		const styleDataType = type === 'default' ? styles.blue : styles.red;
		if (value) {
			return (<li data-notification-type={type} className={css(styleDataType)} onClick={() => markAsRead(id)} >{value}</li>);
		} else {
			return (<li dangerouslySetInnerHTML={html} className={css(styleDataType)}onClick={() => markAsRead(id)} data-notification-type={type}></li>)
		}
	}
}

NotificationItem.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.string,
    })
  ).isRequired,
};

// Define default props
NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},

};

export default NotificationItem;