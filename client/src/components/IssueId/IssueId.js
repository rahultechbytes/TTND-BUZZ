import React from 'react';
import moment from 'moment';
import './issueIdStyle.css'

const IssueId = (props) => {
    const { issueId, name, attachment, concern, createdAt, emailId, title, department, assignedTo, status } = props.complaintDetails;
    return (
        <React.Fragment>
            <a
                className="modal-btn "
                data-toggle="modal"
                data-target={`#myModal${issueId}`}
                >
                {issueId}
            </a>
            <div className="modal fade" id={`myModal${issueId}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Complain Details</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <table style={{ 'width': '100%' }}>
                                <tbody>
                                    <tr style={{ 'border': 'none%' }}>
                                        <th>Issue ID:</th>
                                        <td>{issueId}</td>
                                    </tr>
                                    <tr>
                                        <th>Title:</th>
                                        <td>{title}</td>
                                    </tr>
                                    <tr>
                                        <th>Details:</th>
                                        <td>{concern}</td>
                                    </tr>
                                    <tr>
                                        <th>Created At:</th>
                                        <td>{moment(createdAt).format('LL')}</td>
                                    </tr>
                                    {(attachment) ?
                                        <tr>
                                            <th>Image:</th>
                                            <td><img src={attachment} width={'100px'} height={'100px'} alt='' /></td>
                                        </tr>
                                        : null
                                    }
                                    <tr>
                                        <th>Department:</th>
                                        <td>{department}</td>
                                    </tr>
                                    <tr>
                                        <th>Email Id:</th>
                                        <td>{emailId}</td>
                                    </tr>
                                    <tr>
                                        <th>Raised By:</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <th>Assigned To:</th>
                                        <td>{assignedTo.username}</td>
                                    </tr>
                                    <tr>
                                        <th>Status:</th>
                                        <td>{status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default IssueId;

