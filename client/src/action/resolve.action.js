import axiosInstance from '../utils/axiosInterceptor';

// GET REQUEST FOR COMPLAINT LIST

const getComplaintListToState = data => {
    console.log("resolve action show:");
    return {
        type: "SHOW_COMPLAINT",
        data
    }
}

export const showComplaintList = () => (dispatch) => {
    console.log("inside AXIOS SHOWCOMPLAINLIST")
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/dashboard/resolve',
    }).then(res => {
        console.log('resolve data fetched from db');
        dispatch(getComplaintListToState(res.data))
    })
}