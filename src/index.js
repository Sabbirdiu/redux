import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//  STORE ->> Global  Management

//ACTION ->> WHAT YOU WANT TO DO

//REDUCER ->> DESCRIBE & CHECK THE ACTION

//DISPATCH ->> THIS IS THE WAY TO EXECUTE THE ACTION

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
