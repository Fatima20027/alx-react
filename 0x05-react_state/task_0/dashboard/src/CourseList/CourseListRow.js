import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


const row = {
  backgroundColor: "#f5f5f5ab",
};

const headerRow = {
  backgroundColor: "#deb5b545"
}

const styles = StyleSheet.create({
  defaultRows:{
    fontfamily: 'Arial, Helvetica, sans-serif',
		borderbottom: '1px solid lightgray',
		height: '25px',
		textAlign: 'left'

  },

  headerRows:{
    fontfamily: 'Arial, Helvetica, sans-serif',
		textAlign: 'center'
    

  },
})

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={row}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(styles.headerRows)}>{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.headerRows)}>{textFirstCell}</th>
            <th className={css(styles.headerRows)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td style={css(styles.defaultRows)}>{textFirstCell}</td>
          <td style={css(styles.defaultRows)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;