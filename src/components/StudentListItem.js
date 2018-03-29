import React from 'react';
import InputInlineEdit from './InputInlineEdit.js';

const styles = {
  color: 'red'
};

const StudentListItem = (props) => (
  <div className="table__row" style={props.score < 65 ? styles : null }>
    <div className="table__item">{props.index+1}.</div>
    <InputInlineEdit inputValueType="name" id={props.id} value={props.fullName} />
    <InputInlineEdit inputValueType="score" id={props.id} value={props.score} />
    <td className="table__item">{+props.score < 65 ? 'Fail' : 'Pass'}<button onClick={() => props.removeStudent(props.id)}>&#10005;</button></td>
  </div>
)

export default StudentListItem;