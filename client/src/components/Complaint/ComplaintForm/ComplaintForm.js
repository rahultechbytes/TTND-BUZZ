import React, { Component } from 'react'
import { addComplaint } from '../../../action/complaint.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import './complaintFormStyle.css';
import { loadingAlert } from '../../../utils/actionAlert'
import validate from '../../../validations/index';
class ComplaintForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            department: "",
            title: "",
            concern: "",
            attachment: "",
            error: ""
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

    handleOnSubmit = (event) => {
        event.preventDefault();
        const { department, title, concern, attachment } = this.state;
        const formData = new FormData();
        formData.append("department", department);
        formData.append("title", title);
        formData.append("concern", concern);
        formData.append("attachment", attachment);
        let err = validate(title, department, concern, attachment);
        this.setState({
            error: err.error
        })

        if (err.flag) {
            this.props.addComplaint(formData, this.props.filter);
            this.setState({
                department: "",
                title: "",
                concern: "",
                attachment: ""
            });
            event.target.reset();
            loadingAlert("Complaint is getting saved");
        }
    }

    render() {
        const image = <FontAwesomeIcon icon={faImage} />
        console.log("error",this.state.error);
        return (
            <div className="form-container">
                <form method="POST" className="complaintForm" onSubmit={this.handleOnSubmit} encType='multipart/form-data'>
                    <header className="complaint-hd ">
                        Complaint Box
                    </header>
                    <div className="form-row extra">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputText">Issue Title</label>
                            <input type="text" name='title' className="form-control" id="inputText" placeholder='Issue Title' onChange={this.handleOnChange} />
                            <span className="error">{this.state.error.title}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="department">Select Department</label>
                            <select name="department" id="department" className="form-control" onChange={this.handleOnChange}>
                                <option hidden value="">Department</option>
                                <option value="Hardware">Hardware</option>
                                <option value="Infrastructure">Infrastructure</option>
                                <option value="Others">Others</option>
                            </select>
                            <span className="error">{this.state.error.department}</span>
                        </div>
                    </div>
                    <div className="form-group extra">
                        <label htmlFor="concern">Your Concern</label>
                        <textarea name="concern" className="form-control" id="concern" rows="7" onChange={this.handleOnChange} placeholder='Concern' ></textarea>
                        <span className="error">{this.state.error.concern}</span>
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
                        <span className="error">{this.state.error.attachment}</span>
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
