// ACTION CONSTANTS

const GET_PINS = "pins/GET_PINS"
const CREATE_PIN = "pins/CREATE_PIN"
const EDIT_PIN = "pins/EDIT_PIN"
const DELETE_PIN = "pins/DELETE_PIN"
const CLEAR_PINS = "pins/CLEAR_PINS"

// ACTION CREATORS

const getPins = (pins) => ({
    type: GET_PINS,
    pins
})


// THUNKS

export const getPinsThunk = () => async (dispatch) => {
    const response = await fetch("/api/pins/")
    if (response.ok) {
        // console.log('get pins response ok')
        const data = await response.json();
        const pins = data.pins
        console.log('data.errors',data.errors)
        dispatch(getPins(pins))
        
    } else {
        const errors = await response.json()
        return errors;
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
        default:
            return state
    }

}
