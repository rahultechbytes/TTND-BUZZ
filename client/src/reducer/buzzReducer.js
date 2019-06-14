const InitialState ={
    buzzfeed:[]
} 

const buzzReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "POST_BUZZ_FEED": {
            return { 
                ...state,
                buzzfeed:[action.data, ...state.buzzfeed] 
            };
        }
        case "GET_BUZZ_FEED":{
            return{
                ...state,
                buzzfeed: action.data
            }
        }
        default: {
            return state;
        }
    }
}

export default buzzReducer;
