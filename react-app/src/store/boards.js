// ACTION CONSTANTS


const GET_BOARDS= "boards/GET_BOARDS"
const GET_BOARD_DETAILS = "boards/GET_BOARD_DETAILS"
const CREATE_BOARD = "boards/CREATE_BOARD"
const EDIT_BOARD = "boards/EDIT_BOARD"
const DELETE_BOARD = "boards/DELETE_BOARD"
const CLEAR_BOARDS = "boards/CLEAR_BOARDS"

// ACTION CREATORS

const getBoards = (boards) => ({
    type: GET_BOARDS,
    boards
})

const getBoardDetails = (singleBoard) => ({
    type: GET_BOARD_DETAILS,
    singleBoard
})

const createBoard = (board) => ({
    type: CREATE_BOARD,
    board
})

const editBoard = (singleBoard) => ({
    type: EDIT_BOARD,
    singleBoard
})

const deleteBoard = (boardId) => ({
    type: DELETE_BOARD,
    boardId
})

export const clearBoards = () => ({
    type: CLEAR_BOARDS
})

// THUNKS

export const getBoardsThunk = () => async (dispatch) => {
    const response = await fetch("/api/boards/")
    if (response.ok) {
        // console.log('get boards response ok')
        const data = await response.json();
        const boards = data.boards
        dispatch(getBoards(boards))
        
    } else {
        const errors = await response.json()
        return errors;
    }
}

export const getBoardDetailsThunk = (boardId) => async (dispatch) => {
    const response = await fetch(`/api/boards/${boardId}`)

    if (response.ok) {
        // console.log('get board details response ok')
        const boardDetails = await response.json()
        dispatch(getBoardDetails(boardDetails))
    } else {
        // console.log('get board details response NOT OK')
        const errors = await response.json()
        return errors
    }
}

export const createBoardThunk = (board) => async (dispatch) => {
    const response = await fetch("/api/boards/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(board)
    })
    
    if (response.ok) {
        // console.log('create board response ok')

        const newBoard = await response.json()
        dispatch(createBoard(newBoard))
    } else {
        // console.log('create board response not ok')
        const errors = await response.json()
        // console.log('errors', errors)
        return errors
    }
}


export const editBoardThunk = (board) => async (dispatch) => {
    const response = await fetch(`/api/boards/${board.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(board)
    })

    if (response.ok) {
        // console.log('edit a board response ok')
        const updateboard = await response.json()
        dispatch(editBoard(updateboard))
        return updateboard
    } else {
        // console.log('edit a board response NOT OK')
        const errors = await response.json()
        return errors
    }
    
}

export const deleteBoardThunk = (boardId) => async (dispatch) => {
    const response = await fetch(`/api/boards/${boardId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        // console.log('delete board response ok')
        dispatch(deleteBoard(boardId))
    } else {
        // console.log('delete board response NOT OK')
        const errors = await response.json()
        return errors
    }
}

export const deletePinsFromBoardThunk = (boardId, pinId) => async (dispatch) => {

    const response = await fetch(`/api/boards/${boardId}/remove-pin/${pinId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        dispatch(getBoardsThunk())
    } else {
        // console.log('delete board response NOT OK')
        const errors = await response.json()
        return errors
    }
}

// REDUCER

const initialState = { allBoards: {}, singleBoard: {} };

export default function boardsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_BOARDS: {
            const newState = { allBoards: {}, singleBoard: {} };
            if (action.boards.length) {
                action.boards.forEach((board) => {
                    newState.allBoards[board.id] = board
                })
            }

            return newState;
        }
        case GET_BOARD_DETAILS: {
            const newState = { ...state }
            newState.singleBoard = action.singleBoard
            return newState
        }
        case CREATE_BOARD: {
            const newState = {...state, allBoards: {...state.allBoards}}
            newState.allBoards[action.board.id] = action.board
            return newState
        }
        case EDIT_BOARD: {
            const newState = { ...state }
            newState.singleBoard= action.singleBoard
            return newState
        }
        case DELETE_BOARD: {
            const newState = { ...state, allBoards: { ...state.allBoards }}
            delete newState.allBoards[action.boardId]
            return newState
        }
        case CLEAR_BOARDS: {
            return { allBoards: {} }
        }
        default:
            return state
    }
}
