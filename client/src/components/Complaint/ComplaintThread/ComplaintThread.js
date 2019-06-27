import React, { Component } from 'react'
import IssueId from '../../IssueId/IssueId'
import './thread.css';
class ComplaintThread extends Component {
    render() {
        const { department, issueId, assignedTo: { username }, status } = this.props.list;
        return (
            <tr>
                <td>{department}</td>
                <td><IssueId id={issueId} /></td>
                <td>{username}</td>
                <td className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")}>{status}</td>
            </tr>
        )
    }
}

export default ComplaintThread
