const InitialState = {
    buzzfeed: []
}

const buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POST_BUZZ_FEED": {
            return {
                ...state,
                buzzfeed: [action.data, ...state.buzzfeed]
            };
        }
        case "GET_BUZZ_FEED": {
            return {
                ...state,
                buzzfeed: action.data
            }
        }
        case "GET_LIKE": {
            const buzzLike = state.buzzfeed.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzfeed: buzzLike
            }
        }
        case "GET_DISLIKE": {
            const buzzDisLike = state.buzzfeed.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzfeed: buzzDisLike
            }
        }
        case "DELETE_BUZZ": {
            console.log("inside delete reducer", action.data);
            const deleteBuzz = state.buzzfeed.filter(item=>
                action.data !== item._id
            );
            return {
                ...state,
                buzzfeed: deleteBuzz
            }
        }
        default: {
            return state;
        }
    }
}

export default buzzReducer;
