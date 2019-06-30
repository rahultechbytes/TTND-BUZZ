import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap';
import moment from 'moment';
import './issueIdStyle.css';
class IssueId extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            attachment: "",
            concern: "",
            createdAt: "",
            emailId: "",
            show: false,
        }
    }
    handleOnClick = () => {
        const data = this.props.complaintData.filter((item) => {
            return item.issueId === this.props.id
        });
        this.setState({
            ...data[0],
            show: true
        })

    }
    handleClose = () => {
        this.setState({ show: false });
    }


    render() {
        const { name, attachment, concern, createdAt, emailId, title } = this.state;
        const IssueId = this.props.id
        return (
            <div>
                <a className="issue_id" variant="primary" onClick={this.handleOnClick}>
                    <span >{IssueId}</span>
                </a>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="u_name">{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="complaintBody">
                        {attachment ? <img className="complaintImg" width="200px" src={attachment} alt="" /> : ""}
                        <h6>
                            <b>Name: </b>
                            {name}
                        </h6>
                        <h6>
                            <b>Concern: </b>
                            {concern}
                        </h6>
                        <h6>
                            <b>Complaint Time: </b>
                            {moment(createdAt).calendar()}
                        </h6>
                        <h6>
                            <b>Email Id: </b>
                            {emailId}
                        </h6>
                    </Modal.Body>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { complaintData: state.complaintReducer.complaintList }
}


export default connect(mapStateToProps, null)(IssueId)
