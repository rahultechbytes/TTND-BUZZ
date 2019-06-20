import axiosInstance from '../utils/axiosInterceptor';

export const getUserToState = (data) => {
    console.log("profile user action");
    return {
        type: "ShOW_USER_PROFILE",
        data
    }
}

export const getUser = () => (dispatch) => {
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/user'
    }).then((res) => {
        dispatch(getUserToState(res.data));
    });
}