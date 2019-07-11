const initialState = {
    complaintList: []
}

const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMPLAINT": {
            if (action.data.filter === action.data.addComplain.status || action.data.filter === "All Complaints") {
                return {
                    ...state,
                    complaintList: [action.data.addComplain, ...state.complaintList]
                }
            }
            return {
                ...state
            };
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