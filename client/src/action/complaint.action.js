import axiosInstance from '../utils/axiosInterceptor';

//post request for complaint
export const addComplaintToState = (data) => {
    console.log("complaint action add");
    return {
        type: "ADD_COMPLAINT",
        data
    }
}

export const addComplaint = (formData) => (dispatch) => {
    axiosInstance({
        method: 'post',
        url: "http://localhost:5000/dashboard/complaint",
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        if (res.data.message === "Complaint Saved") {
            dispatch(addComplaintToState(res.data.data));
        }
    });
}

//get request for complaint
export const getComplaintListToState = (data) => {
    console.log("complaint action show");
    return {
        type: "SHOW_COMPLAINT",
        data
    }
}

export const showComplaintList = (skip) => (dispatch) => {
    axiosInstance({
        method: 'get',
        url: `http://localhost:5000/dashboard/complaint/${skip}`,
    }).then(res => {
        console.log('data fetched from db');
        dispatch(getComplaintListToState(res.data))
    })
}