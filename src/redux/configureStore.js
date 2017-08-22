import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware)
)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}));

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}