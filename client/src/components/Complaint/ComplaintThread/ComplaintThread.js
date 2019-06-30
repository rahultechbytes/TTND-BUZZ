import React from 'react'
import IssueId from '../../IssueId/IssueId'
import './thread.css';

const ComplaintThread = (props) => {
    const { department, issueId, assignedTo: { username }, status } = props.list;
    return (
        <tr>
            <td>{department}</td>
            <td><IssueId id={issueId} /></td>
            <td>{username}</td>
            <td className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")}>{status}</td>
        </tr>
    )
}

export default ComplaintThread
