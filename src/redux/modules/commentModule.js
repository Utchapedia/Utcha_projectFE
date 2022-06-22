//comment.js
import { commentApi } from '../../shared/api';

//Actions
const CREATE = 'commentModule/CREATE';
const LOAD = 'commentModule/LOAD';
const UPDATE = 'commentModule/UPDATE';
const DELETE = 'commentModule/DELETE';

const initialState = {
  list: [],
};

// Action Creators
export function createMyComment(new_comment) {
  return { type: CREATE, new_comment };
}
export function loadComments(new_comments) {
  return { type: LOAD, new_comments };
}
export function updateComment(new_comments) {
  return { type: UPDATE, new_comments };
}
export function deleteComment(new_comments) {
  return { type: DELETE, new_comments };
}

//middlewares
export const CreateCommentDB = (comment, username, movie_id) => {
  return async function (dispatch) {
    commentApi.createComment(comment, username, movie_id);
  };
};

export const LoadCommentDB = (movie_id) => {
  return async function (dispatch) {
    const data = await commentApi.loadComment(movie_id);
    console.log(data.data.comment);
    dispatch(loadComments(data.data.comment));
    // console.log(commentApi.loadComment);
    // const data = await commentApi.loadComment(comments);
    // dispatch(loadComments(data.data[0].movie_id.comments));
  };
};

export const UpdateCommentDB = (comment) => {
  return async function (dispatch) {
    const data = await commentApi.updateComment();
    dispatch(updateComment(data.data[0].comment));
  };
};

export const DeleteCommentDB = (comment) => {
  return async function (dispatch) {
    const data = await commentApi.deleteComment();
    dispatch(deleteComment(data.data[0].comment));
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'commentModule/LOAD': {
      return { list: action.new_comments };
    }
    // case 'commentModule/CREATE': {
    //   const new_comment = action.new_comment;
    //   // const new_comments = [...state.list.movie_id.comments]
    //   // new_comments.push(new_comment);
    //   // console.log(state.list)

    //   const new_comment_list = [{ ...state.list }, action.new_comment];

    //   return { list: new_comment_list };
    // }

    // case 'commentModule/LOAD' : {
    //     // const new_comment_list = [...state.list];
    //      console.log(action.new_comments)
    //     return {list: action.new_comments}
    // }

    default:
      return state;
  }
}
