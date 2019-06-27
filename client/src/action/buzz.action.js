import axiosInstance from '../utils/axiosInterceptor';
// import {
//     POST_BUZZ_FEED,
//     GET_BUZZ_FEED,
//     GET_LIKE,
//     GET_DISLIKE,
//     DELETE_BUZZ
// } from './actionTypes'

//saving buzz feeds to db
export const addBuzzFeedToState = (data) => {
    return {
        type: "POST_BUZZ_FEED",
        data
    }
}

export const addBuzz = (formData) => dispatch => {
    axiosInstance({
        method: 'post',
        url: "http://localhost:5000/dashboard/buzz",
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
        .then(res => {
            if (res.data.message === "Data Saved") {
                dispatch(addBuzzFeedToState(res.data.data));
            }
        });
}



//getting buzz feeds from db
export const getBuzzFromDb = (data) => {
    return {
        type: "GET_BUZZ_FEED",
        data
    }
}

export const getBuzz = (skip) => dispatch => {
    axiosInstance({
        method: 'get',
        url: `http://localhost:5000/dashboard/buzz/${skip}`,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    .then(res => {
        dispatch(getBuzzFromDb(res.data));
    });
}

//Likes Feature
export const getLikeFromDb = (data) => {
    // console.log("post like feed")
    // console.log(data);
    return {
        type: "GET_LIKE",
        data
    }
}

export const postLike = (buzzId) => (dispatch) => {
    // console.log('buzz here', buzzId);
    axiosInstance({
        method: 'patch',
        data: { buzzId },
        url: "http://localhost:5000/dashboard/buzz/like"
    })
        .then(res => {
            // console.log("likes data recieved from db", res);
            dispatch(getLikeFromDb(res.data));
        }).catch((err) => { console.error(err); });
}

//Dislikes Feature
export const getDislikeFromDb = (data) => {
    // console.log("post dislike feed")
    // console.log(data);
    return {
        type: "GET_DISLIKE",
        data
    }
}

export const postDislike = (buzzId) => (dispatch) => {
    // console.log('buzz here', buzzId);
    axiosInstance({
        method: 'patch',
        data: { buzzId },
        url: "http://localhost:5000/dashboard/buzz/dislike"
    })
        .then(res => {
            // console.log("dislikes data recieved from db", res);
            dispatch(getLikeFromDb(res.data));
        }).catch((err) => { console.error(err); });
}

//Delete post

export const deletePostFromDb = (data) => {
    return{
        type: "DELETE_BUZZ",
        data
    }
}

export const postDelete = (buzzId) => (dispatch) => {
    axiosInstance({
        method: 'DELETE',
        url: `http://localhost:5000/dashboard/buzz/${buzzId}`,
    }).then(res => {
        console.log("res in delete: ", res);
        if (res.status === 200) {
            dispatch(deletePostFromDb(res.data));
        }
    })
}

