import React from 'react'
import './thread.css';

const ComplaintThread = (props) => {
    const handleOnChange = (event) => {
        props.updateComplaint({ status: event.target.value, issueId: props.list.issueId });
    }

    const handleOnClick = (complainDetail) => {
        props.showIssueIdModal(complainDetail);
    }

    const { department, name, assignedTo: { username }, status, issueId } = props.list;
    return (
        <tr className="table-row">
            <td data-label="department">{department}</td>
            <td data-label="Issue Id" className="hoverLink" onClick={() => handleOnClick(props.list)}>
                {issueId}
            </td>
            {props.role === 'admin' && props.resolve === 'true' ? <td data-label="Locked By">{name}</td> : ''}
            <td data-label="Assigned to">{username}</td>
            {props.role === 'admin' && props.resolve === 'true' ?
                <td data-label="Status">
                    <select onChange={handleOnChange} className={(status === 'Pending' ? "status-pending arrow" : (status === 'In Progress') ? "status-in-progress arrow" : "status-resolved arrow")} name="status" value={status} >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>:
                <td data-label="Status" className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")}>{status}</td>
            }
        </tr>
    )
}

export default ComplaintThread
