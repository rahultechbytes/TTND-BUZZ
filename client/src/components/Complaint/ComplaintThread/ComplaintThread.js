import React, { Component } from 'react'

class ComplaintThread extends Component {
    render() {
        const { department, issueId, assignedTo, status } = this.props.list;
        return (
            <ul>
                <li>{department}</li>
                <li>{issueId}</li>
                <li>{assignedTo}</li>
                <li>{status}</li>
            </ul>
        )
    }
}

export default ComplaintThread
