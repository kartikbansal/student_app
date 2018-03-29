import { configureStore } from 'redux-mock-store';
import expect from 'expect';
import uuid from 'uuid';
import reducer from '../reducers/students.js';
import * as actions from '../actions/students.js';

describe('student reducers', () => {

  it('should return the intial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add student', () => {

    expect(
      reducer([], {
        type: 'ADD_STUDENT',
        payload: {
          id: 1,
          name: 'Kartik',
          score: 100
        }
      })
    )
    .toEqual([
      {
        id: 1,
        name: 'Kartik',
        score: 100
      }
    ]);

    expect(
      reducer([{
        id: 1,
        name: 'XYZ',
        score: 85
      }], {
        type: 'ADD_STUDENT',
        payload: {
          id: 2,
          name: 'Kartik',
          score: 100
        }
      })
    )
    .toEqual([
      {
        id: 2,
        name: 'Kartik',
        score: 100
      },
      {
        id: 1,
        name: 'XYZ',
        score: 85
      }
    ]);


  });

  it('should handle remove student', () => {
    
    expect(
      reducer(
        [], 
        {
          type: 'REMOVE_STUDENT',
          payload: {
            id: 1
          }
        }
      )
    ).toEqual([]);

    expect(
      reducer(
        [{
          name: 'Kartik',
          id: 1,
          score: 100
        }, {
          name: 'dvdkv',
          id: 2,
          score: 100
        }], 
        {
          type: 'REMOVE_STUDENT',
          payload: 2
        }
      )
    ).toEqual([{
      name: 'Kartik',
      id: 1,
      score: 100
    }]);

  });

  it('should handle edit student name', () => {
    expect(
      reducer([], {
        type: 'EDIT_STUDENT_NAME',
        payload: {
          id: 1,
          fullName: 'Kartik'
        }
      })
    ).toEqual([])

    expect(
      reducer([{
        id: 1,
        fullName: 'kartik',
        score: 100
      }], {
        type: 'EDIT_STUDENT_NAME',
        payload: {
          id: 1,
          fullName: 'Kartik'
        }
      })
    ).toEqual([{
      id: 1,
      fullName: 'Kartik',
      score: 100
    }])
  });

  it('should handle edit student score', () => {
    expect(
      reducer([], {
        type: 'EDIT_STUDENT_SCORE',
        payload: {
          id: 1,
          score: 100
        }
      })
    ).toEqual([])

    expect(
      reducer([{
        id: 1,
        fullName: 'kartik',
        score: 95
      }], {
        type: 'EDIT_STUDENT_SCORE',
        payload: {
          id: 1,
          score: 100
        }
      })
    ).toEqual([{
      id: 1,
      fullName: 'kartik',
      score: 100
    }])
  });
  

});