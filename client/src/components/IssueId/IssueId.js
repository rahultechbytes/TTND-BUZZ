import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap';
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
        const { name, attachment, concern, createdAt, emailId } = this.state;
        console.log("this.state", this.state);
        const IssueId = this.props.id
        return (
            <div>
                <Button variant="primary" onClick={this.handleOnClick}>
                    <span >{IssueId}</span>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="img-fluid" width="200px" src={attachment} alt="" />
                        <h6>{concern}</h6>
                        <h6>{createdAt}</h6>
                        <h6>{emailId}</h6>
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
