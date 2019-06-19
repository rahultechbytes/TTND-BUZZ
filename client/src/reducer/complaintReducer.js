const initialState = {
    complaintList: []
}

const complaintReducer = (state = initialState, action) => {
    console.log("complaintList: ", state.complaintList);
    switch (action.type) {
        case "ADD_COMPLAINT": {
            return {
                ...state,
                complaintList: [action.data, ...state.complaintList]
            }
        }
        case "SHOW_COMPLAINT": {
            return {
                ...state,
                complaintList: action.data
            }
        }
        default: {
            return state
        }
    }
}

export default complaintReducer;