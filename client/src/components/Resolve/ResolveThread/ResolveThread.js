import React from 'react';
import IssueId from '../../IssueId/IssueId';
import '../ResolveList/resolveListStyle.css'

const ResolveThread = (props) => {

    const handleOnChange = (event) => {
        props.updateComplaint({ status: event.target.value, issueId: props.list.issueId });
    }

    const { department, name, status, assignedTo: { username } } = props.list;
    return (
        <tr className="table-row">
            <td data-label="department">{department}</td>
            <td data-label="Issue Id"><IssueId complaintDetails={props.list} /></td>
            <td data-label="Locked By">{name}</td>
            <td data-label="Assigned To">{username}</td>
            <td data-label="Status">
                <select onChange={handleOnChange} className={(status === 'Pending' ? "status-pending arrow" : (status === 'In Progress') ? "status-in-progress arrow" : "status-resolved arrow")} name="status" value={status} >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>
            </td>
        </tr>
    )
}

export default ResolveThread;