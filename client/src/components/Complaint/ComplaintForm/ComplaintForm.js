import React, { Component } from 'react'
import {addComplaint} from '../../../action/complaint.action';
import {connect} from 'react-redux';
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

    handleOnSubmit = (e) => {
        e.preventDefault();
        const complaintData = this.state;
        console.log("complaintData: ", complaintData);
        const formData = new FormData();
        formData.append("department", complaintData.department);
        formData.append("title", complaintData.title);
        formData.append("concern", complaintData.concern);
        formData.append("attachment", complaintData.attachment);

        this.props.addComplaint(formData);
        this.setState({
            department: "",
            title: "",
            concern: "",
            attachment: ""
        });
        e.target.reset();
    }

    render() {
        return (
            <div>
                <form method="POST" onSubmit={this.handleOnSubmit} encType='multipart/form-data'>
                    <select name="department" id="department" onChange={this.handleOnChange}>
                        <option hidden>department</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Others">Others</option>
                    </select>
                    <input name='title' placeholder='Issue Title' onChange={this.handleOnChange} type="text" required />
                    <textarea name="concern" id="concern" cols="30" rows="10" onChange={this.handleOnChange} placeholder='Concern' required></textarea>
                    <input type="file" name="attachment" onChange={this.fileUpload} accept='image/*' id="attachment" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addComplaint
}

export default connect(null, mapDispatchToProps)(ComplaintForm)
