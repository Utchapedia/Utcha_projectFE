// detail.js
import { movieListApi } from '../../shared/api';

// Actions
const LOAD = 'detail/LOAD';

// 미들웨어
// 오누리 작성 부분 (디테일 페이지 테스트)
export const loadOneMovieListDB = (movie_id) => {
  return async function (dispatch) {
    const data = await movieListApi.loadOneMovieList(movie_id);
    // console.log(data.data.movieDetail);
    dispatch(loadOneMovieList(data.data.movieDetail));
  };
};

// 서버에서 데이터를 받아서 쓸 것이기 때문에, initialState는 빈 값으로 둠.
const initialState = {
  list: [],
};

// Actions Creators
export function loadOneMovieList(movie_list) {
  return { type: LOAD, movie_list };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'detail/LOAD': {
      return { list: action.movie_list };
    }
    default:
      return state;
  }
}
