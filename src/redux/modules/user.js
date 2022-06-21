// user.js
import { authApi } from '../../shared/api';
import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// Actions
const LOG_OUT = 'LOG_OUT';
const LOG_IN = 'LOG_IN';
// const GET_USER = 'GET_USER';
// const SET_USER = 'SET_USER';

// action creators
export const logOut = createAction(LOG_OUT, (user) => ({ user }));
export const logIn = createAction(LOG_IN, (user) => ({ user }));
// export const getUser = createAction(GET_USER, (user) => ({ user }));
// export const setUser = createAction(SET_USER, () => ({}));

//initialState
const initialState = {
  user: null,
  is_login: false,
};
// console.log(initialState);

// middlewares
export const signInDB = (email, password) => {
  return function (dispatch) {
    console.log(email, password);
    authApi.signIn(email, password);
    dispatch(logIn());
  };
};

export const signUpDB = (name, email, password) => {
  return function (dispatch) {
    console.log(name, email, password);
    return authApi.signUp(name, email, password);
  };
};

export const logOutDB = () => {
  return function (dispatch, { history }) {
    dispatch(logOut());
    console.log('로그아웃 완료!');
    // replace는 뒤로가기 시에도 원래 페이지가 나오지 않음.
    // history.replace('/');
  };
};

export default handleActions(
  {
    // [SET_USER]: (state, action) =>
    //   produce(state, (draft) => {
    //     console.log(draft);
    //     draft.is_login = true;
    //   }),
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
        draft.user = localStorage.getItem('nickName');
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    // [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);
