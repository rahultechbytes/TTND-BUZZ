import axiosInstance from '../utils/axiosInterceptor';
// import {
//     BASE_URL, 
//     BUZZ_FEED
// } from '../constants/constants'

//saving buzz feeds to db
export const addBuzzFeedToState = (data)=>{
    console.log("buzz action");
    return{
        type: "POST_BUZZ_FEED",
        data
    }
}

export const addBuzz= (formData) => dispatch =>{
    axiosInstance({
        method:'post',
        url: "http://localhost:5000/dashboard/buzz",
        data: formData,
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
    .then(res=>{
        if(res.data.message === "Data Saved"){
            // console.log("data saved to server and comeback");
            dispatch(addBuzzFeedToState(res.data.data));
        }
    });
}



//getting buzz feeds from db
export const getBuzzFromDb = (data)=>{
    console.log("get_BUZZ_FEED")
    console.log(data);
    return{
        type: "GET_BUZZ_FEED",
        data
    }
}

export const getBuzz= () => dispatch =>{
    axiosInstance({
        method:'get',
        url: "http://localhost:5000/dashboard/buzz",
        config: {headers: {'Content-Type': 'multipart/form-data'}}
    })
    .then(res=>{
            console.log("feeds data recieved from db",res);
            dispatch(getBuzzFromDb(res.data));
    });
}

