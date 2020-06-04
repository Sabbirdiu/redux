import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './components/reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  allReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
