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
        case "UPDATE_COMPLAINT_STATUS": {
            const list = state.resolveList.map((item) => action.data.issueId === item.issueId ? action.data : item);
            return {
                ...state,
                resolveList: list
            }
        }
        default: {
            return state;
        }
    }
}

export default resolveReducer;