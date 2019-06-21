import React, { Component } from 'react'

class ComplaintThread extends Component {
    render() {
        const { department, issueId, assignedTo:{username}, status } = this.props.list;
        return (
            <ul>
                <li>{department}</li>
                <li>{issueId}</li>
                <li>{username}</li>
                <li>{status}</li>
            </ul>
        )
    }
}

export default ComplaintThread
