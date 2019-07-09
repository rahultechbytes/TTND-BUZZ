const InitialState = {
    buzzfeed: []
}

const buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POST_BUZZ_FEED": {
            if (action.data.filter === action.data.addBuzz.category || action.data.filter === "Most Recent") {
                return {
                    ...state,
                    buzzfeed: [action.data.addBuzz, ...state.buzzfeed]
                };
            }

        }
        case "GET_BUZZ_FEED": {
            const morePost = state.buzzfeed.concat(...action.data);
            return {
                ...state,
                buzzfeed: morePost
            }
        }
        case "CLEAR_BUZZ": {
            return {
                ...state,
                buzzfeed: []
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
            const deleteBuzz = state.buzzfeed.filter(item =>
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
