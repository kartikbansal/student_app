import React, { Component } from 'react';
import { connect } from 'react-redux';
import { titleCase } from '../utils/helpers.js';
import { editStudentName, editStudentScore } from '../actions/students.js';

class InputInlineEdit extends Component {

  state = {
    isEditing: false,
    inputValue: this.props.value
  }

  submitUpdatedInput = () => {
    let { inputValue } = this.state;
    const { inputValueType } = this.props;
    inputValue = inputValue.trim();
    if(inputValue && inputValue !== this.props.value) {
      if(inputValueType === 'name') 
        this.props.dispatch(editStudentName({id: this.props.id, fullName: titleCase(inputValue)}));
      if(inputValueType === 'score')
        this.props.dispatch(editStudentScore({id: this.props.id, score: inputValue}));
    }
    this.setState(() => ({ isEditing: false }));
  }

  handleBlur = () => {
    this.submitUpdatedInput();
  }

  handleKeyDown = (e) => {
    if(e.keyCode === 27) {
      this.setState(() => ({ isEditing: false }));
    } else if(e.keyCode === 13) {
      this.submitUpdatedInput();
    }
  }

  updateInput = (inputValue) => {
    const { inputValueType } = this.props;
    if(inputValueType === 'name') {
      if(!inputValue || inputValue.match(/^[A-Za-z][a-zA-Z\s]*$/))
        this.setState(() => ({ inputValue }));
    } else if(inputValueType === 'score') {
      if(!inputValue || inputValue.match(/^[1-9][0-9]?$|^100$/))
        this.setState(() => ({ inputValue }));
    }
  }

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.updateInput(inputValue);
  }

  handleClick = () => {
    this.setState(() => ({ isEditing: true, inputValue: this.props.value }));
  }

  render() {
    return (
      <td onClick={this.handleClick} className="table__item">
        {this.state.isEditing  
        ? <input 
            type="text" 
            value={this.state.inputValue}
            onKeyDown={this.handleKeyDown}
            autoFocus
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        : this.props.value
        }
      </td>
    )
  }
}

export default connect()(InputInlineEdit);