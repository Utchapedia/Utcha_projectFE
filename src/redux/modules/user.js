// user.js
import { movieListApi, authApi } from '../../shared/api';

// Actions
const LOAD = 'movieList/LOAD';
// const CREATE = 'user/CREATE';

const initialState = {
  user: null,
  is_login: false,
};

// middlewares
export const signInDB = (email, password) => {
  return function (dispatch) {
    console.log(email, password);
    return authApi.signIn(email, password);
  };
};

export const signUpDB = (name, email, password) => {
  return function (dispatch) {
    console.log(name, email, password);
    return authApi.signUp(name, email, password);
  };
};

export const loadMovieListDB = () => {
  return async function (dispatch) {
    // 만들어둔 instance에 보낼 요청 타입과 주소로 요청.
    const data = await movieListApi.loadMovieList();
    // console.log(data.data[0].movies);
    dispatch(loadMovieList(data.data[0].movies));
  };
};

// Actions Creators
export function loadMovieList(movie_list) {
  return { type: LOAD, movie_list };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'movieList/LOAD': {
      return { list: action.movie_list };
    }
    default:
      return state;
  }
}
