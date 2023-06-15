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


// THUNKS

export const getBoardsThunk = () => async (dispatch) => {
    const response = await fetch("/api/boards/")
    if (response.ok) {
        console.log('get boards response ok')
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
        console.log('get board details response ok')
        const boardDetails = await response.json()
        dispatch(getBoardDetails(boardDetails))
    } else {
        console.log('get board details response NOT OK')
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
            const newState = { ... state }
            newState.singleBoard = action.singleBoard
            return newState
        }
        default:
            return state
    }
}
