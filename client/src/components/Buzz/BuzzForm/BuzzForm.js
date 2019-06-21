import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBuzz } from '../../../action/buzz.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faImage, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './formStyle.css';

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

    handleOnSubmit = (e) => {
        e.preventDefault();
        const newBuzz = this.state;
        // console.log("newBuzz: ", newBuzz);
        const formData = new FormData();
        formData.append("userPost", newBuzz.userPost);
        formData.append("category", newBuzz.category);
        formData.append("attachment", newBuzz.attachment);

        this.props.addBuzz(formData);
        this.setState({
            userPost: "",
            category: "",
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
        // console.log("userPost: ", this.state.userPost);
        // console.log("category: ",this.state.category);
        return (
            <React.Fragment>

                <form method="POST" encType="multipart/form-data" onSubmit={this.handleOnSubmit}>
                    <header className="form-head">
                        {pen} Create Buzz
                    </header>
                    <textarea className="form-control" name="userPost" onChange={this.handleOnChange} value={this.state.userPost} placeholder="Share your thoughts..." rows="5" required></textarea>
                    <div className="footer">
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
                            </div>
                        </div>
                        <div className="submit-btn">
                            <label htmlFor="form-submit">
                                {postBtn}
                            </label>

                            <input type="submit" id="form-submit" value="submit" />
                        </div>
                    </div>
                </form>
                <footer>
                </footer>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return { userfeed: state.buzzReducer }
}

// const mapDispatchToProps = (dispatch) => ({
//     addBuzz: (data) => dispatch(addBuzz(data))
// });
const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm)
