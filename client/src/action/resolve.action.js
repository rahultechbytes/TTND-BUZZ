import axiosInstance from '../utils/axiosInterceptor';
import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from '../constants/actionTypes';
import { BASE_URL } from '../constants/urlConstants';
import { successAlert, errorAlert } from '../utils/actionAlert';


// GET REQUEST FOR COMPLAINT LIST
const getComplaintListToState = data => {
    return {
        type: SHOW_COMPLAINT,
        data
    }
}

export const showComplaintList = (filter) => (dispatch) => {
    axiosInstance({
        method: 'GET',
        url: `${BASE_URL}/dashboard/resolve?filter=${filter}`,
    }).then(res => {
        dispatch(getComplaintListToState(res.data));
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
    axiosInstance({
        method: 'PATCH',
        url: `${BASE_URL}/dashboard/resolve`,
        data: updatedData
    }).then((res) => {
        dispatch(updateComplaintInState(res.data));
        successAlert("Status Updated successfully");
    }).catch((err) => {
        console.log("Error occured while updating complaints", err);
        errorAlert("Something went wrong while updating complaint");
    })
}