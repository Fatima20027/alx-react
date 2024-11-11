import React from "react";
import PropTypes from "prop-types";

const row = {
  backgroundColor: "#f5f5f5ab",
};

const headerRow = {
  backgroundColor: "#deb5b545"
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={row}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} style={headerRow}>{textFirstCell}</th>
        ) : (
          <>
            <th style={headerRow}>{textFirstCell}</th>
            <th style={headerRow}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
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