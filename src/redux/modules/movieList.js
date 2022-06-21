// movieList.js
import { movieListApi } from '../../shared/api';

// Actions
const LOAD = 'movieList/LOAD';

// 서버에서 데이터를 받아서 쓸 것이기 때문에, initialState는 빈 값으로 둠.
const initialState = {
  list: [],
};

// middlewares
export const loadMovieListDB = () => {
  return async function (dispatch) {
    const data = await movieListApi.loadMovieList();
    // console.log(data.data[0].movies);
    // console.log(data.data.movie);
    dispatch(loadMovieList(data.data.movie));
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
