import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBuzz } from '../../action/buzz.action'

class Form extends Component {
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
        // console.log("userPost: ", this.state.userPost);
        // console.log("category: ",this.state.category);
        return (
            <React.Fragment>
                <header>
                    form
                </header>
                <form method="POST" encType="multipart/form-data" onSubmit={this.handleOnSubmit}>
                    <textarea name="userPost" onChange={this.handleOnChange} value={this.state.userPost} placeholder="Share your thoughts..." cols="30" rows="10"></textarea>
                    <select name="category" onChange={this.handleOnChange}>
                        <option hidden>Category</option>
                        <option value="Activity">Activity</option>
                        <option value="Lost And Found">Lost and Found</option>
                    </select>
                    <input type="file" onChange={this.fileUpload} name="attachment" accept="image/*" />
                    <input type="submit" value="submit" />
                </form>
                <footer>
                </footer>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log("inside mapStateToProps", state);
    return { userfeed: state.buzzReducer }
}

// const mapDispatchToProps = (dispatch) => ({
//     addBuzz: (data) => dispatch(addBuzz(data))
// });
const mapDispatchToProps = {
    addBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
