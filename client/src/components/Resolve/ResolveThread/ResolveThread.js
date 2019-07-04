import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssueId from '../../IssueId/IssueId';
import { updateComplaint } from '../../../action/resolve.action';
import '../ResolveList/resolveListStyle.css'
class ResolveThread extends Component {

    handleOnChange = (event) => {
        this.props.updateComplaint({ status: event.target.value, issueId: this.props.list.issueId });
    }

    render() {
        const { department, name, status, issueId, assignedTo: { username } } = this.props.list;
        // console.log("status: ", status);
        return (
            <tr className="table-row">
                <td data-label="department">{department}</td>
                {/* <td>{issueId}</td> */}
                <td data-label="Issue Id"><IssueId id={issueId} /></td>
                <td data-label="Locked By">{name}</td>
                <td data-label="Assigned To">{username}</td>
                <td data-label="Status">
                    <select onChange={this.handleOnChange} className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")} name="status" value={status} >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = {
    updateComplaint
}

export default connect(null, mapDispatchToProps)(ResolveThread);
