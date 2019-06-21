import React, { Component } from 'react'

export default class ResolveThread extends Component {
    render() {
        const { department, name, status, issueId, assignedTo: { username } } = this.props.list;
        console.log("status: ",status);
        return (
            <div>
                <ul>
                    <li>{department}</li>
                    <li>{issueId}</li>
                    <li>{name}</li>
                    <li>{username}</li>
                    <li>
                        <select className={(status === 'Pending' ? "status-pending" : (status === 'In Progress') ? "status-in-progress" : "status-resolved")} name="status" >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </li>
                </ul>
            </div>
        )
    }
}
