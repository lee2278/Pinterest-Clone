// ACTION CONSTANTS


const GET_COMMENTS= "comments/GET_COMMENTS"
// const GET_COMMENT_DETAILS = "comments/GET_COMMENT_DETAILS"
const CREATE_COMMENT = "comments/CREATE_COMMENT"
const EDIT_COMMENT = "comments/EDIT_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"
const CLEAR_COMMENTS = "comments/CLEAR_COMMENTS"

// ACTION CREATORS

const getComments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

// const getCommentDetails = (singleComment) => ({
//     type: GET_COMMENT_DETAILS,
//     singleComment
// })

const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment
})

const editComment = (singleComment) => ({
    type: EDIT_COMMENT,
    singleComment
})

const deleteComment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})

export const clearComments = () => ({
    type: CLEAR_COMMENTS
})

// THUNKS

export const getCommentsThunk = () => async (dispatch) => {
    const response = await fetch("/api/comments/")
    if (response.ok) {
        // console.log('get comments response ok')
        const data = await response.json();
        const comments = data.comments
        dispatch(getComments(comments))
        
    } else {
        const errors = await response.json()
        return errors;
    }
}


export const createCommentThunk = (comment) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment)
    })
    
    if (response.ok) {
        // console.log('create comment response ok')

        const newComment = await response.json()
        dispatch(createComment(newComment))
    } else {
        // console.log('create comment response not ok')
        const errors = await response.json()
        // console.log('errors', errors)
        return errors
    }
}


export const editCommentThunk = (comment) => async (dispatch) => {
    const response = await fetch(`/api/comments/${comment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment)
    })

    if (response.ok) {
        // console.log('edit a comment response ok')
        const updateComment = await response.json()
        dispatch(editComment(updateComment))
        return updateComment
    } else {
        // console.log('edit a comment response NOT OK')
        const errors = await response.json()
        return errors
    }
    
}


export const deleteCommentThunk = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        // console.log('delete comment response ok')
        dispatch(deleteComment(commentId))
    } else {
        // console.log('delete comment response NOT OK')
        const errors = await response.json()
        return errors
    }
}

// REDUCER

const initialState = { allComments: {}, singleComment: {} };

export default function commentsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_COMMENTS: {
            const newState = { allComments: {}, singleComment: {} };
            if (action.comments.length) {
                action.comments.forEach((comment) => {
                    newState.allComments[comment.id] = comment
                })
            }
            return newState;
        }
        case EDIT_COMMENT: {
            const newState = { ...state }
            newState.singleComment= action.singleComment
            return newState
        }
        case DELETE_COMMENT: {
            const newState = { ...state, allComments: { ...state.allComments }}
            delete newState.allComments[action.commentId]
            return newState
        }
        case CLEAR_COMMENTS: {
            return { allComments: {} }
        }
        default:
            return state
    }
}
