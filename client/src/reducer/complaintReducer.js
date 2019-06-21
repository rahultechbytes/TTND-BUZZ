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
            const complains = state.complaintList.concat(...action.data);
            return {
                ...state,
                complaintList: complains
            }
        }
        default: {
            return state
        }
    }
}

export default complaintReducer;