import axiosInstance from '../utils/axiosInterceptor';
import {
    POST_BUZZ_FEED,
    GET_BUZZ_FEED,
    GET_LIKE,
    GET_DISLIKE,
    DELETE_BUZZ,
    CLEAR_BUZZ
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/urlConstants';
import { successAlert, errorAlert } from '../utils/actionAlert'

// POST REQUEST FOR BUZZ
export const addBuzzFeedToState = (data) => {
    return {
        type: POST_BUZZ_FEED,
        data
    }
}

export const addBuzz = (formData, filter) => dispatch => {
    axiosInstance({
        method: 'post',
        url: `${BASE_URL}/dashboard/buzz`,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then((res) => {
        dispatch(addBuzzFeedToState({ addBuzz: res.data.data, filter: filter }));
        successAlert("Buzz Created")
    }).catch((err) => {
        console.log("Error occured at adding buzz => ", err);
        errorAlert("Something went wrong while adding buzz")
    });
}

// GET REQUEST FOR BUZZ FEED
export const getBuzzFromDb = (data) => {
    return {
        type: GET_BUZZ_FEED,
        data
    }
}

export const getBuzz = (skip, filter) => (dispatch) => {
    if (skip === 0) {
        dispatch({ type: CLEAR_BUZZ })
    }
    console.log("filter: ", filter);
    axiosInstance({
        method: 'get',
        url: `${BASE_URL}/dashboard/buzz?offset=${skip}&filter=${filter}`,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        dispatch(getBuzzFromDb(res.data))
    }).catch((err) => {
        console.log("Error occured at showing buzz => ", err);
        errorAlert("Something went wrong while fetching buzz");
    });
}

// FOR LIKE 
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
        url: `${BASE_URL}/dashboard/buzz/like`
    }).then(res => {
        dispatch(getLikeFromDb(res.data));
    }).catch((err) => {
        console.error("Error occured while liking post", err);
        errorAlert("Something Went Wrong while liking post");
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
        url: `${BASE_URL}/dashboard/buzz/dislike`
    }).then(res => {
        dispatch(getLikeFromDb(res.data));
    }).catch((err) => {
        console.log("Error occured while disliking post", err)
        errorAlert("Something Went Wrong while disliking post");
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
        url: `${BASE_URL}/dashboard/buzz/${buzzId}`,
    }).then(res => {
        dispatch(deletePostFromDb(res.data));
    }).catch((err) => {
        console.log("Error occured while deleting post", err);
        errorAlert("Something Went Wrong while Deleting post");
    })
}

