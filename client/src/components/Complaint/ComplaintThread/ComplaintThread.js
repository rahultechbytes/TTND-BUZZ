import React, { Component } from 'react'
import IssueId from '../../IssueId/IssueId'
class ComplaintThread extends Component {
    render() {
        const { department, issueId, assignedTo: { username }, status } = this.props.list;
        return (
            <ul>
                <li>{department}</li>
                <li>
                    <IssueId id={issueId} />
                </li>
                <li>{username}</li>
                <li>{status}</li>
            </ul>
        )
    }
}

export default ComplaintThread
