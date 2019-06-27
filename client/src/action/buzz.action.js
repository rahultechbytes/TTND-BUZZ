import axiosInstance from '../utils/axiosInterceptor';
import {
    POST_BUZZ_FEED,
    GET_BUZZ_FEED,
    GET_LIKE,
    GET_DISLIKE,
    DELETE_BUZZ
} from './actionTypes'

//saving buzz feeds to db
export const addBuzzFeedToState = (data) => {
    return {
        type: POST_BUZZ_FEED,
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
        .then((res) => {
            if (res.status === 200) {
                dispatch(addBuzzFeedToState(res.data.data));
            }
        }).catch((err) => {
            console.log("Error occured at adding buzz => ", err);
        });
}

//getting buzz feeds from db
export const getBuzzFromDb = (data) => {
    return {
        type: GET_BUZZ_FEED,
        data
    }
}

export const getBuzz = (skip) => dispatch => {
    axiosInstance({
        method: 'get',
        url: `http://localhost:5000/dashboard/buzz/${skip}`,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        if (res.status === 200) {
            dispatch(getBuzzFromDb(res.data))
        }
    }).catch((err) => {
        console.log("Error occured at showing buzz => ", err);
    });
}

//Likes Feature
export const getLikeFromDb = (data) => {
    return {
        type: GET_LIKE,
        data
    }
}

export const postLike = (buzzId) => (dispatch) => {
    axiosInstance({
        method: 'patch',
        data: { buzzId },
        url: "http://localhost:5000/dashboard/buzz/like"
    }).then(res => {
        if (res.status === 200) {
            dispatch(getLikeFromDb(res.data));
        }
    }).catch((err) => {
        console.error("Error occured while liking post", err);
    });
}

//Dislikes Feature
export const getDislikeFromDb = (data) => {
    return {
        type: GET_DISLIKE,
        data
    }
}

export const postDislike = (buzzId) => (dispatch) => {
    axiosInstance({
        method: 'patch',
        data: { buzzId },
        url: "http://localhost:5000/dashboard/buzz/dislike"
    }).then(res => {
        if (res.status === 200) {
            dispatch(getLikeFromDb(res.data));
        }
    }).catch((err) => {
        console.log("Error occured while disliking post", err)
    });
}

//Delete post
export const deletePostFromDb = (data) => {
    return {
        type: DELETE_BUZZ,
        data
    }
}

export const postDelete = (buzzId) => (dispatch) => {
    axiosInstance({
        method: 'DELETE',
        url: `http://localhost:5000/dashboard/buzz/${buzzId}`,
    }).then(res => {
        if (res.status === 200) {
            dispatch(deletePostFromDb(res.data));
        }
    }).catch((err) => {
        console.log("Error occured while deleting post", err)
    })
}

