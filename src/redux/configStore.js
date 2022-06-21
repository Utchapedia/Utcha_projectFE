// 스토어
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import movieList from './modules/movieList';
import commentModule from './modules/commentModule';
import user from './modules/user';

const middlewares = [thunk];

const rootReducer = combineReducers({ movieList, commentModule, user });

const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
