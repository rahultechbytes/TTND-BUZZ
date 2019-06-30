import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/urlConstants';
import { successAlert, errorAlert } from '../utils/actionAlert';

// POST REQUEST FOR COMPLAINT
export const addComplaintToState = (data) => {
    console.log("complaint action add");
    return {
        type: ADD_COMPLAINT,
        data
    }
}

export const addComplaint = (formData) => (dispatch) => {
    axiosInstance({
        method: 'post',
        url: `${BASE_URL}/dashboard/complaint`,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        if (res.status === 200) {
            dispatch(addComplaintToState(res.data));
            successAlert("Complaint Registered");
        }
    }).catch((err) => {
        console.log("Error occured in adding complaint", err);
        errorAlert("Something went wrong while Registering Complaint");
    })
}

// GET REQUEST FOR COMPLAINT LIST
export const getComplaintListToState = (data) => {
    return {
        type: SHOW_COMPLAINT,
        data
    }
}

export const showComplaintList = () => (dispatch) => {
    axiosInstance({
        method: 'get',
        url: `${BASE_URL}/dashboard/complaint`,
    }).then((res) => {
        if (res.status === 200) {
            dispatch(getComplaintListToState(res.data));
        }
    }).catch((err) => {
        console.log('Error occured while fetching complaint', err);
        errorAlert("Something went wrong while Fetching Complaints");
    })
}