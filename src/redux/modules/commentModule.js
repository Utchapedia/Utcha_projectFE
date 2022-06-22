//comment.js
import { commentApi } from "../../shared/api";



//Actions
const CREATE = 'commentModule/CREATE';
const LOAD = 'commentModule/LOAD';
const UPDATE = 'commentModule/UPDATE';
const DELETE = 'commentModule/DELETE';

const initialState = {
    list : [{
        postId: 0,
        commentId: 0,
        comment: "재밌어요~!",
        nickName: "테스트네임",
        createdAt: "2020-04-09T19:12:30.686",
        editcheck: "false"
    },
    {
        postId: 1,
        commentId: 1,
        comment: "최고최고~!",
        nickName: "테스트네임2",
        createdAt: "2020-04-10T19:12:30.686",
        editcheck: "false"
    }

]};

// Action Creators

export function createMyComment(new_comment) {
    return {type : CREATE, new_comment}
}
export function loadComments(new_comments) {
    return {type : LOAD, new_comments}
}
export function updateComment(new_comments) {
    return {type : UPDATE, new_comments}
}
export function deleteComment(new_comments) {
    return {type : DELETE, new_comments}
}

//middlewares
export const CreateCommentDB = (comment,username, movie_id) => {
    return function (dispatch) {
        const data = commentApi.createComment(comment,username, movie_id)
        console.log(data)
        dispatch(createMyComment(comment));       
    };
};

export const LoadCommentDB = (comments) => {
    return async function (dispatch) {
        console.log(commentApi.loadComment)
        const data = await commentApi.loadComment(comments);
        dispatch(loadComments(data.data[0].movie_id.comments));       
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
export default function reducer(state = initialState, action={}) {
    switch (action.type){

        case 'commentModule/CREATE' : {         
            const new_comment = action.new_comment;
            // const new_comments = [...state.list.movie_id.comments]
            // new_comments.push(new_comment);
            // console.log(state.list)

            const new_comment_list = [{...state.list}, action.new_comment]
            
            console.log(new_comment_list)
            return {list: new_comment_list}           
        }

        // case 'commentModule/LOAD' : {
        //     // const new_comment_list = [...state.list];
        //      console.log(action.new_comments)
        //     return {list: action.new_comments}
        // }

        default: return state
    }
}


