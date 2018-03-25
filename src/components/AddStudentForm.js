import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../actions/students.js';

class AddStudentForm extends Component {
  state = {
    name: '',
    score: '',
    error: ''
  }

  handleNameChange = (e) => {
    const name = e.target.value;
    if(!name || name.match(/^[a-zA-Z][a-zA-Z\s]*$/))
      this.setState(() => ({ name }));
  }

  handleScoreChange = (e) => {
    const score = e.target.value;
    if(!score || score.match(/^[1-9][0-9]?$|^100$/))
      this.setState(() => ({ score }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, score } = this.state;

    if(!name || !score) {
      this.setState(() => ({ error: 'Both Name and Score are required' }));
      return;
    } else {
      this.setState(() => ({ name: '', score: '', error: '' }));
      this.nameInput.focus();
      this.props.dispatch(addStudent(name.trim(), score));
    }
  }
  
  render() {
    return (
      <div className="box">
        <form className="form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="form__err">{this.state.error}</p>}
          <div className="input-group">
            <label className="input-group__label">Name</label>
            <input 
              className="text-input"
              type="text" 
              placeholder="Eg., John"
              value={this.state.name}
              onChange={this.handleNameChange}
              ref={input => this.nameInput = input}
            />
          </div>
          <div className="input-group">
          <label className="input-group__label">Score</label>
            <input 
              className="text-input"
              type="text" 
              placeholder="Eg., 86"
              value={this.state.score}
              onChange={this.handleScoreChange}
            />
          </div>
          <button className="submit_button">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddStudentForm);