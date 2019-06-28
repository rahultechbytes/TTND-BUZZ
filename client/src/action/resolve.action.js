import axiosInstance from '../utils/axiosInterceptor';
import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from './actionTypes';
import { successAlert, errorAlert } from './actionAlert';


// GET REQUEST FOR COMPLAINT LIST
const getComplaintListToState = data => {
    console.log("resolve action show:");
    return {
        type: SHOW_COMPLAINT,
        data
    }
}

export const showComplaintList = () => (dispatch) => {
    console.log("inside AXIOS SHOWCOMPLAINLIST")
    axiosInstance({
        method: 'GET',
        url: 'http://localhost:5000/dashboard/resolve',
    }).then(res => {
        if (res.status === 200) {
            console.log('resolve data fetched from db');
            dispatch(getComplaintListToState(res.data));
        }
    }).catch((err) => {
        console.log("Error occured while fetching complaints", err);
        errorAlert("Something went wrong while Getting Complaints");
    })
}

//PATCH REQUEST FOR STATUS CHANGE

const updateComplaintInState = (data) => {
    return {
        type: UPDATE_COMPLAINT_STATUS,
        data
    }
}

export const updateComplaint = (updatedData) => (dispatch) => {
    console.log("updatedData: ", updatedData);
    axiosInstance({
        method: 'PATCH',
        url: "http://localhost:5000/dashboard/resolve",
        data: updatedData
    }).then((res) => {
        if (res.status === 200) {
            console.log("complain updated");
            dispatch(updateComplaintInState(res.data));
            successAlert("Status Updated successfully");
        }
    }).catch((err) => {
        console.log("Error occured while updating complaints", err);
        errorAlert("Something went wrong while updating complaint");
    })
}