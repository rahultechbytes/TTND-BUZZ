import React from 'react'
import ComplaintForm from '../ComplaintForm/ComplaintForm'
import ComplaintList from '../ComplaintList/ComplaintList';

const ComplaintManager = (props) => {
        return (
            <div>
                <ComplaintForm />
                <ComplaintList />
            </div>
        )
}

export default ComplaintManager
