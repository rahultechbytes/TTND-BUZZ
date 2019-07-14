const InitialState = {
    resolveList: [],
    currentFilter: "All Complaints"
}

const resolveReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SHOW_COMPLAINT": {
            return {
                ...state,
                resolveList: action.data,
                currentFilter: action.filter
            }
        }
        case "UPDATE_COMPLAINT_STATUS": {
            let list = [];
            if(state.currentFilter === "All Complaints"){
                list = state.resolveList.map((item) => action.data.issueId === item.issueId ? action.data : item);
            } else {
                list = state.resolveList.filter((item) => action.data.issueId !== item.issueId);
            }
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