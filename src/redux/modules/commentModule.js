//comment.js

//Actions
const CREATE = 'comment/CREATE';
const LOAD = 'comment/LOAD';
const UPDATE = 'comment/UPDATE';
const DELETE = 'comment/DELETE';

const initialState = {
    list : [],
    post : []};

// Action Creators

export function CreateComment(new_comment) {
    return {type : CREATE, new_comment}
}

export function LoadComment(new_comments) {
    return {type : LOAD, new_comments}
}

export function UpdateComment(new_comments) {
    return {type : UPDATE, new_comments}
}

export function DELETEComment(new_comments) {
    return {type : DELETE, new_comments}
}

//middlewares

// export const CreateCommentDB = () => {
//     return function (dispatch) {
//         const data= await 
//     }
// }


//Reducer
export default function reducer(state = initialState, action={}) {
    switch (action.type){
        case 'comment/CREATE' : {
            const new_comment = action.new_comment;            
            const new_comments = [...state.list[0].comments];
            new_comments.push(new_comment);
            
            const new_post = [{...state.post[0]}];
            new_post[0].comments = new_comments;
            return {list: state.list, post:[{...new_post[0]}]}
            
        }
        default: return state
    }
}