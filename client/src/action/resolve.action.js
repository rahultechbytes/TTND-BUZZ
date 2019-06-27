import axiosInstance from '../utils/axiosInterceptor';
import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from './actionTypes'


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
        console.log('resolve data fetched from db');
        dispatch(getComplaintListToState(res.data))
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
        console.log("complain updated");
        dispatch(updateComplaintInState(res.data));
    }).catch((err) => {
        console.log("error in status change: ", err);
    })
}