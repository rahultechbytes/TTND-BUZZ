import React, { Component } from 'react'
import BuzzForm from '../BuzzForm/BuzzForm';
import BuzzFeeds from '../BuzzFeeds/BuzzFeeds';
import { connect } from 'react-redux'
import { getBuzz, clearBuzz, postLike, postDislike, postDelete } from '../../../action/buzz.action';

class Buzz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skip: 0,
            filter: "Most Recent"
        }
    }

    componentDidMount() {
        this.props.getBuzz(0, this.state.filter);   //Initial skip = 0 and filter = most recent buzz
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value,
            skip: 0
        }, () => {
            this.props.getBuzz(this.state.skip, this.state.filter);
        })
    }

    loadFunc = () => {
        this.setState({
            skip: this.state.skip + 5
        }, () => {
            this.props.getBuzz(this.state.skip, this.state.filter);
        })
    }

    render() {
        return (
            <div>
                <BuzzForm
                    filter={this.state.filter}
                />
                <BuzzFeeds
                    loggedInUser={this.props.loginUserData}
                    userFeeds={this.props.userFeeds}
                    loadFunc={this.loadFunc}
                    skip={this.state.skip}
                    handleOnChange={this.handleOnChange}
                    postDelete={this.props.postDelete}
                    postLike={this.props.postLike}
                    postDislike={this.props.postDislike}

                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        userFeeds: state.buzzReducer.buzzfeed,
        loginUserData: state.userReducer.userData
    }
}

const mapDispatchToProps = {
    getBuzz,
    clearBuzz,
    postLike,
    postDislike,
    postDelete
}

export default connect(mapStateToProps, mapDispatchToProps)(Buzz)

