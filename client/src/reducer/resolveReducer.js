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
            console.log("action.data", action.data);
            // const list = state.resolveList.map(element => {
            //     console.log("action.data.issueId", action.data.issueId);
            //     console.log("element.issueId",element.issueId);
            //     if (action.data.issueId === element.issueId) {
            //         return action.data;
            //     } else {
            //         return element;
            //     }
            // })
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