// ACTION CONSTANTS
const GET_SAVES = "saves/GET_SAVES"
const CREATE_SAVE = "saves/CREATE_SAVE"
const DELETE_SAVE = "saves/DELETE_SAVE"
const CLEAR_SAVES = "saves/CLEAR_SAVES"


// ACTION CREATORS

const getSaves = (saves) => ({
    type: GET_SAVES,
    saves
})
const createSave= (save) => ({
    type: CREATE_SAVE,
    save
})


const deleteSave = (saveId) => ({
    type: DELETE_SAVE,
    saveId
})

export const clearSaves = () => ({
    type: CLEAR_SAVES
})

// THUNKS

export const getSavesThunk = () => async (dispatch) => {
    const response = await fetch("/api/saves/")
    if (response.ok) {
        // console.log('get saves response ok')
        const data = await response.json();
        const saves = data.saves
        dispatch(getSaves(saves))
        
    } else {
        const errors = await response.json()
        return errors;
    }
}

export const createSaveThunk = (save) => async (dispatch) => {
    const response = await fetch("/api/saves/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(save)
    })
    
    if (response.ok) {
        // console.log('create save response ok')

        const newSave = await response.json()
        dispatch(createSave(newSave))
    } else {
        console.log('create save response not ok')
        const errors = await response.json()
        console.log('errors', errors)
        return errors
    }
}



export const deleteSaveThunk = (saveId) => async (dispatch) => {
    const response = await fetch(`/api/saves/${saveId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        // console.log('delete save response ok')
        dispatch(deleteSave(saveId))
    } else {
        // console.log('delete save response NOT OK')
        const errors = await response.json()
        return errors
    }
}


// REDUCER

const initialState = { allSaves: {} };

export default function savesReducer(state = initialState, action) {
    switch(action.type) {
        case GET_SAVES: {
            const newState = { allSaves: {} };
            if (action.saves.length) {
                action.saves.forEach((save) => {
                    newState.allSaves[save.id] = save
                })
            }

            return newState;
        }
        case CREATE_SAVE: {
            const newState = {...state, allSaves: {...state.allSaves}}
            newState.allSaves[action.save.id] = action.save
            return newState
        }
        case DELETE_SAVE: {
            const newState = { ...state, allSaves: { ...state.allSaves }}
            delete newState.allSaves[action.saveId]
            return newState
        }
        case CLEAR_SAVES: {
            return { allSaves: {} }
        }
        default:
            return state
    }
}
