// ACTION CONSTANTS
const GET_SAVES = "saves/GET_SAVES"
const CREATE_SAVE = "saves/CREATE_SAVE"

// ACTION CREATORS

const getSaves = (saves) => ({
    type: GET_SAVES,
    saves
})
const createSave= (save) => ({
    type: CREATE_SAVE,
    save
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
        default:
            return state
    }
}
