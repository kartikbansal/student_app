import congifureMockStore from 'redux-mock-store';
import expect from 'expect';
import uuid from 'uuid';
import * as actions from '../actions/students.js';

// const mockStore = configureMockStore();

describe('student actions', () => {
  
  it('should create an action to add student', () => {
    const student = {
      id: 1,
      name: 'Kartik',
      score: 95
    };
    const expectedAction = {
      type: 'ADD_STUDENT',
      payload: { ...student }
    }
    expect(actions.addStudent(student)).toEqual(expectedAction);
  });

  it('should create an action to remove student', () => {
    const id = 1;
    const expectedAction = {
      type: 'REMOVE_STUDENT',
      payload: id
    };
    expect(actions.removeStudent(id)).toEqual(expectedAction);
  });

  it('should create an action to edit student\'s name', () => {
    const updates = {
      id: 1,
      name: 'Kartik'
    };
    const expectedAction = {
      type: 'EDIT_STUDENT_NAME',
      payload: {
        ...updates
      }
    };
    expect(actions.editStudentName(updates)).toEqual(expectedAction);
  });

  it('should create an action to edit student\'s score', () => {
    const updates = {
      id: 1,
      score: 100
    };
    const expectedAction = {
      type: 'EDIT_STUDENT_SCORE',
      payload: {
        ...updates
      }
    };
    expect(actions.editStudentScore(updates)).toEqual(expectedAction);
  })

});