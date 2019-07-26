import React, { Component } from 'react'
import Swal from 'sweetalert2';
import moment from 'moment';
import './issueIdStyle.css'

export default class IssueId extends Component {

    componentDidMount() {
        const { issueId, name, attachment, concern, createdAt, emailId, title, department, assignedTo, status } = this.props.complaintDetail;

        Swal.fire({
            title: '<strong>Complain Detail</strong>',
            html:
                `
                <table style="text-align:left">
                <tbody>
                    <tr style={{ 'border': 'none' }}>
                        <th>Issue ID:</th>
                        <td>${issueId}</td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td>${title}</td>
                    </tr>
                    <tr>
                        <th>Details:</th>
                        <td>${concern}</td>
                    </tr>
                    <tr>
                        <th>Created At:</th>
                        <td>${moment(createdAt).format('LL')}</td>
                    </tr>
                    ${(attachment) ?
                    `
                        <tr>
                            <th>Image:</th>
                            <td><img src= ${attachment} width={'100px'} height={'100px'} alt='' /></td>
                        </tr>`
                    : ''
                }
                    <tr>
                        <th>Department:</th>
                        <td>${department}</td>
                    </tr>
                    <tr>
                        <th>Email Id:</th>
                        <td>${emailId}</td>
                    </tr>
                    <tr>
                        <th>Raised By:</th>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <th>Assigned To:</th>
                        <td>${assignedTo.username}</td>
                    </tr>
                    <tr>
                        <th>Status:</th>
                        <td>${status}</td>
                    </tr>
                </tbody>
            </table>
                
                `,
            showCloseButton: true,
            onClose: this.props.onClose
        })
    }
    render() {
        return (
            <React.Fragment />
        )
    }
}





