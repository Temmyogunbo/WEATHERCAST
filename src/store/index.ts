import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { IStoreState, } from '../Interfaces/StoreInterface';
import { appReducer, } from '../reducers'


const initialState = {};

const configureStore = ({ }) => {
  return createStore(
    appReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxImmutableStateInvariant()),
    )
  );
};

export default configureStore;
