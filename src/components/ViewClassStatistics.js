import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewClassStatistics = ({ students }) => (
  <React.Fragment>
    { students.length
      ? <Link to="/stats">View Class Statistics &rarr;</Link>
      : null 
    } 
  </React.Fragment>
);

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(ViewClassStatistics);