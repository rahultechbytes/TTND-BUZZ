import axiosInstance from '../utils/axiosInterceptor';
import {
    ShOW_USER_PROFILE
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/urlConstants';
import { errorAlert } from '../utils/actionAlert';

export const getUserToState = (data) => {
    return {
        type: ShOW_USER_PROFILE,
        data
    }
}

export const getUser = () => (dispatch) => {
    axiosInstance({
        method: 'GET',
        url: `${BASE_URL}/user`
    }).then((res) => {
        if (res.status === 200) {
            dispatch(getUserToState(res.data));
        }
    }).catch((err) => {
        console.log("Error occured while fetching user details", err);
        errorAlert("Something went wrong while getting User Info");
    });
}