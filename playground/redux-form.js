import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer, Field, reduxForm  } from 'redux-form';
import React, { Component } from 'react';
import { render } from 'react-dom';

const rootReducer = combineReducers({
  form: formReducer
});
//store knows how to handle actions coming from form


const store = createStore(rootReducer);

let SyncValidationForm = props => {
  return (
    <form>
      <Field 
        name="username"
        type="text"
        label="Username"
        component="input"
      />
      <Field 
        name="email"
        type="email"
        label="Email"
      />
      <Field 
        name="age"
        type="number"
        label="Age"
      />
      <div>
        <button>
          Submit
        </button>
        <button>
          Cancel
        </button>
      </div>
    </form>
  );
}

SyncValidationForm = reduxForm({
  form: 'syncValidation'
})(SyncValidationForm);


class App extends Component {
  render() {
    return (
      <SyncValidationForm />
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

