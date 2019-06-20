const initialState = {
    userData:[]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ShOW_USER_PROFILE": {
            return {
                ...state,
                userData: action.data, ...state.userData
            }
        }
        default: {
            return state;
        }
    }
}

export default userReducer;
