import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuzz } from '../action/buzz.action'

export class Feeds extends Component {

    componentDidMount() {
        this.props.getBuzz();
    }

    render() {
        console.log("state",this.props.userFeeds);
        return (
            <div>
                <ul>
                    {/* {this.props.userFeeds.buzzfeed.map((data) => {
                        return <li>{data.category}</li>
                    })} */}
                </ul>
                <p>
                //userPost
                </p>
                <p></p> //time
                <p></p> //category
                <p></p> //image
                <p></p> //like
                <p></p> //dislike
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state);
    return { userFeeds: state.buzzReducer }
}

const mapDispatchToProps = {
    getBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds)
