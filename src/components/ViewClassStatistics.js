import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Aux = props => props.children;

const ViewClassStatistics = ({ students }) => (
  <Aux>
    { students.length
      ? <Link to="/stats">View Class Statistics &rarr;</Link>
      : null 
    } 
  </Aux>
);

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(ViewClassStatistics);