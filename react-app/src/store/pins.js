// ACTION CONSTANTS

const GET_PINS = "pins/GET_PINS"
const GET_PIN_DETAILS = "pins/GET_PIN_DETAILS"
const CREATE_PIN = "pins/CREATE_PIN"
const EDIT_PIN = "pins/EDIT_PIN"
const DELETE_PIN = "pins/DELETE_PIN"
const CLEAR_PINS = "pins/CLEAR_PINS"

// ACTION CREATORS

const getPins = (pins) => ({
    type: GET_PINS,
    pins
})

const getPinDetails = (singlePin) => ({
    type: GET_PIN_DETAILS,
    singlePin
})

const createPin = (pin) => ({
    type: CREATE_PIN,
    pin
})

const editPin = (singlePin) => ({
    type: EDIT_PIN,
    singlePin
})

const deletePin = (pinId) => ({
    type: DELETE_PIN,
    pinId
})

export const clearPins = () => ({
    type: CLEAR_PINS
})

// THUNKS

export const getPinsThunk = () => async (dispatch) => {
    const response = await fetch("/api/pins/")
    if (response.ok) {
        // console.log('get pins response ok')
        const data = await response.json();
        const pins = data.pins
        dispatch(getPins(pins))
        
    } else {
        const errors = await response.json()
        return errors;
    }
}

export const getPinDetailsThunk = (pinId) => async (dispatch) => {
    const response = await fetch(`/api/pins/${pinId}`)

    if (response.ok) {
        console.log('get pin details response ok')
        const pinDetails = await response.json()
        dispatch(getPinDetails(pinDetails))
    } else {
        console.log('get pins details response NOT OK')
        const errors = await response.json()
        console.log('errors', errors)
        return errors
    }
}

export const createPinThunk = (pin) => async (dispatch) => {
    const response = await fetch("/api/pins/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pin)
    })
    
    if (response.ok) {
        console.log('create pin response ok')

        const newPin = await response.json()
        dispatch(createPin(newPin))
    } else {
        console.log('create pin response not ok')
        const errors = await response.json()
        console.log('errors', errors)
        return errors
    }
}


export const editPinThunk = (pin) => async (dispatch) => {
    const response = await fetch(`/api/pins/${pin.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pin)
    })

    if (response.ok) {
        console.log('edit a pin response ok')
        const updatePin = await response.json()
        dispatch(editPin(updatePin))
        return updatePin
    } else {
        console.log('edit a pin response NOT OK')
        const errors = await response.json()
        return errors
    }
    
}

export const deletePinThunk = (pinId) => async (dispatch) => {
    const response = await fetch(`/api/pins/${pinId}`, {
        method: "DELETE"
    })

    if (response.ok) {
        console.log('delete pin response ok')
        dispatch(deletePin(pinId))
    } else {
        console.log('delete pin response NOT OK')
        const errors = await response.json()
        return errors
    }
}


// REDUCER

const initialState = { allPins: {}, singlePin: {} };

export default function pinsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_PINS: {
            const newState = { allPins: {}, singlePin: {} };
            if (action.pins.length) {
                action.pins.forEach((pin) => {
                    newState.allPins[pin.id] = pin
                })
            }
            return newState;
        }
        case GET_PIN_DETAILS: {
            const newState = {...state}
            newState.singlePin = action.singlePin
            return newState
        }
        case CREATE_PIN: {
            const newState = {...state, allPins: {...state.allPins}}
            newState.allPins[action.pin.id] = action.pin
            return newState
        }
        case EDIT_PIN: {
            const newState = { ...state }
            newState.singlePin= action.singlePin
            return newState
        }
        case DELETE_PIN: {
            const newState = { ...state, allPins: { ...state.allPins }}
            delete newState.allPins[action.pinId]
            return newState
        }
        case CLEAR_PINS: {
            return { allPins: {} }
        }
        default:
            return state
    }

}
