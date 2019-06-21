const InitialState = {
    resolveList: []
}

const resolveReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SHOW_COMPLAINT": {
            return {
                ...state,
                resolveList: action.data
            }
        }
        default: {
            return state;
        }
    }
}

export default resolveReducer;