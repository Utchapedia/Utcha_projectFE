// 스토어
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import movieList from './modules/movieList';

const middlewares = [thunk];

const rootReducer = combineReducers({ movieList });

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
