import axiosInstance from '../utils/axiosInterceptor';
import {
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from './actionTypes'
import { successAlert, errorAlert } from './actionAlert';

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
        url: "http://localhost:5000/dashboard/complaint",
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(res => {
        if (res.data.message === "Complaint Saved") {
            dispatch(addComplaintToState(res.data.data));
            successAlert("Complaint Registered");
        }
    }).catch((err) => {
        console.log("Error occured in adding complaint", err);
        errorAlert("Something went wrong while Registering Complaint");
    })
}

// GET REQUEST FOR COMPLAINT LIST
export const getComplaintListToState = (data) => {
    console.log("complaint action show");
    return {
        type: SHOW_COMPLAINT,
        data
    }
}

export const showComplaintList = () => (dispatch) => {
    axiosInstance({
        method: 'get',
        url: `http://localhost:5000/dashboard/complaint`,
    }).then((res) => {
        if (res.status === 200) {
            console.log('data fetched from db');
            dispatch(getComplaintListToState(res.data));
        }
    }).catch((err) => {
        console.log('Error occured while fetching complaint', err);
        errorAlert("Something went wrong while Fetching Complaints");
    })
}