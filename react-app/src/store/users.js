// ACTION CONSTANTS

const GET_USERS = "users/GET_USERS"

// ACTION CREATORS

const getUsers = (users) => ({
    type: GET_USERS,
    users
})


// THUNKS

export const getUsersThunk = () => async (dispatch) => {
    const response = await fetch("/api/users/")
    if (response.ok) {
        // console.log('get users response ok')
        const data = await response.json();
        const users = data.users
        dispatch(getUsers(users))

    } else {
        const errors = await response.json()
        return errors;
    }
}

// REDUCER

const initialState = { allUsers: {} };

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS: {
            const newState = { allUsers: {} };
            if (action.users.length) {
                action.users.forEach((user) => {
                    newState.allUsers[user.id] = user
                })
            }

            return newState;
        }
        default:
            return state
    }
}
