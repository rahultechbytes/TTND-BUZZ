import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBuzz } from '../../../action/buzz.action'
import BuzzThreads from '../BuzzThreads/BuzzThreads';

export class BuzzFeeds extends Component {

    componentDidMount() {
        this.props.getBuzz();
    }

    render() {
        // console.log("state",this.props.userFeeds);
        return (
            <div>
                <ul>
                    {this.props.userFeeds.map((data,index) => {
                        return (
                            <BuzzThreads feeds={data} key={index}/>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log("mapStateToProps", state);
    return { userFeeds: state.buzzReducer.buzzfeed}
}

const mapDispatchToProps = {
    getBuzz
}

export default connect(mapStateToProps, mapDispatchToProps)(BuzzFeeds)
