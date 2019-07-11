import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/urlConstants';
import { successAlert, errorAlert } from '../utils/actionAlert';

// POST REQUEST FOR COMPLAINT
export const addComplaintToState = (data) => {
    return {
        type: ADD_COMPLAINT,
        data
    }
}

export const addComplaint = (formData, filter) => (dispatch) => {
    axiosInstance({
        method: 'post',
        url: `${BASE_URL}/dashboard/complaint`,
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        dispatch(addComplaintToState({ addComplain: res.data, filter: filter }));
        successAlert("Complaint Registered");
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

export const showComplaintList = (filter) => (dispatch) => {
    axiosInstance({
        method: 'get',
        url: `${BASE_URL}/dashboard/complaint?filter=${filter}`,
    }).then((res) => {
        dispatch(getComplaintListToState(res.data));
    }).catch((err) => {
        console.log('Error occured while fetching complaint', err);
        errorAlert("Something went wrong while Fetching Complaints");
    })
}