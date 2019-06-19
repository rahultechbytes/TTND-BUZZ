import React, { Component } from 'react'
import ComplaintForm from '../ComplaintForm/ComplaintForm'
import ComplaintList from '../ComplaintList/ComplaintList';

class ComplaintManager extends Component {
    render() {
        return (
            <div>
                <ComplaintForm />
                <ComplaintList />
            </div>
        )
    }
}

export default ComplaintManager
