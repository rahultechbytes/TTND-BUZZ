import React, { Component } from 'react'
import { addComplaint } from '../../../action/complaint.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import './complaintFormStyle.css';
import { loadingAlert, warningAlert } from '../../../utils/actionAlert'
class ComplaintForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "",
            title: "",
            concern: "",
            attachment: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileUpload = () => {
        this.setState({
            attachment: event.target.files[0]
        });
    }

    loading = (formData) => {
        if (this.state.concern.replace(/^\s+|\s+$/gm, '') === "") {
            warningAlert("Concern left empty")
        } else if (this.state.title.replace(/^\s+|\s+$/gm, '') === "") {
            warningAlert("Title left empty")
        } else {
            this.props.addComplaint(formData, this.props.filter);
            loadingAlert("Complaint is getting saved");
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const complaintData = this.state;
        const formData = new FormData();
        formData.append("department", complaintData.department);
        formData.append("title", complaintData.title);
        formData.append("concern", complaintData.concern);
        formData.append("attachment", complaintData.attachment);

        this.loading(formData);

        this.setState({
            department: "",
            title: "",
            concern: "",
            attachment: ""
        });
        e.target.reset();
    }

    render() {
        const image = <FontAwesomeIcon icon={faImage} />

        return (
            <div className="form-container">
                <form method="POST" className="complaintForm" onSubmit={this.handleOnSubmit} encType='multipart/form-data'>
                    <header className="complaint-hd">
                        Complaint Box
                    </header>
                    <div className="form-row extra">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputText">Issue Title</label>
                            <input type="text" name='title' className="form-control" id="inputText" placeholder='Issue Title' onChange={this.handleOnChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="department">Select Department</label>
                            <select name="department" id="department" className="form-control" onChange={this.handleOnChange} required>
                                <option hidden value="">Department</option>
                                <option value="Hardware">Hardware</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group extra">
                        <label htmlFor="concern">Your Concern</label>
                        <textarea name="concern" className="form-control" id="concern" rows="7" onChange={this.handleOnChange} placeholder='Concern' required></textarea>
                    </div>
                    <div className="form-group attachment extra">
                        <label htmlFor="file-input">
                            {this.state.attachment.name ?
                                <span className="imgName">{this.state.attachment.name}</span>
                                : <span className="imgName">Attachment</span>
                            }
                            {image}
                        </label>
                        <input type="file" id="file-input" onChange={this.fileUpload} name="attachment" accept="image/*" />
                    </div>
                    <button type="submit" className="btn btn-secondary ml-auto complainBtn">Submit</button>

                </form>

            </div>
        )
    }
}

const mapDispatchToProps = {
    addComplaint
}

export default connect(null, mapDispatchToProps)(ComplaintForm)
