import axiosInstance from '../utils/axiosInterceptor';
import {
    ShOW_USER_PROFILE
} from './actionTypes';
import { errorAlert } from './actionAlert';

export const getUserToState = (data) => {
    console.log("profile user action");
    return {
        type: ShOW_USER_PROFILE,
        data
    }
}

export const getUser = () => (dispatch) => {
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/user'
    }).then((res) => {
        if (res.status === 200) {
            dispatch(getUserToState(res.data));
        }
    }).catch((err) => {
        console.log("Error occured while fetching user details", err);
        errorAlert("Something went wrong while getting User Info");
    });
}