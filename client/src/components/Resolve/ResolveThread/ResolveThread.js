import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssueId from '../../IssueId/IssueId';
import { updateComplaint } from '../../../action/resolve.action';
class ResolveThread extends Component {

    handleOnChange = (event) => {
        this.props.updateComplaint({ status: event.target.value, issueId: this.props.list.issueId });
    }

    render() {
        const { department, name, status, issueId, assignedTo: { username } } = this.props.list;
        // console.log("status: ", status);
        return (
            <tr>
                <td>{department}</td>
                {/* <td>{issueId}</td> */}
                <td><IssueId id={issueId} /></td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                    <select onChange={this.handleOnChange} className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")} name="status" >
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
