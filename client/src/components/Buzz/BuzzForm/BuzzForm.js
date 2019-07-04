import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBuzz } from '../../../action/buzz.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faImage, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './formStyle.css';
import { warningAlert, loadingAlert } from '../../../utils/actionAlert';


class BuzzForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPost: "",
            category: "",
            attachment: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loading = (formData) => {
        if (this.state.userPost.replace(/^\s+|\s+$/gm, '') === "") {
            warningAlert("Text area left Empty")
        }
        else {
            this.props.addBuzz(formData);
            loadingAlert("Your Buzz is getting saved")
        }
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const newBuzz = this.state;
        const formData = new FormData();
        formData.append("userPost", newBuzz.userPost);
        formData.append("category", newBuzz.category);
        formData.append("attachment", newBuzz.attachment);

        this.loading(formData)

        this.setState({
            userPost: "",
            category: "",
            attachment: ""
        });
        e.target.reset();
    }

    fileUpload = () => {
        this.setState({
            attachment: event.target.files[0]
        });
    }


    render() {
        const pen = <FontAwesomeIcon icon={faPen} />
        const image = <FontAwesomeIcon icon={faImage} />
        const postBtn = <FontAwesomeIcon icon={faArrowAltCircleRight} />

        return (
            <React.Fragment>

                <form method="POST" className="form" encType="multipart/form-data" onSubmit={this.handleOnSubmit}>
                    <header className="form-head">
                        {pen} Create Buzz
                    </header>
                    <textarea className="form-control" name="userPost" onChange={this.handleOnChange} value={this.state.userPost} placeholder="Share your thoughts..." rows="5" required></textarea>
                    <footer className="footer">
                        <div className="lf">
                            <select name="category" className="form-control category" onChange={this.handleOnChange} required>
                                <option hidden value="">Category</option>
                                <option value="Activity">Activity</option>
                                <option value="Lost and Found">Lost and Found</option>
                            </select>
                            <div className="image">
                                <label htmlFor="file-input">
                                    {image}
                                </label>

                                <input type="file" id="file-input" onChange={this.fileUpload} name="attachment" accept="image/*" />
                                {this.state.attachment.name ?
                                    <span className='imagename'>{this.state.attachment.name}</span>
                                    : <span className='imagename'>Attachment</span>
                                }

                            </div>
                        </div>
                        <div className="submit-btn">
                            <label htmlFor="form-submit">
                                {postBtn}
                            </label>

                            <input type="submit" id="form-submit" value="submit" />
                        </div>
                    </footer>
                </form>

            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { userfeed: state.buzzReducer }
}

const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm)
