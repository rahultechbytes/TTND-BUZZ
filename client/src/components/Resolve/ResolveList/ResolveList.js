import React, { Component } from 'react'
import { showComplaintList } from '../../../action/resolve.action';
import { connect } from 'react-redux'
import ResolveThread from '../ResolveThread/ResolveThread';

class ResolveList extends Component {

    componentDidMount() {
        this.props.showComplaintList()
    }

    render() {
        return (
            <div>
                {this.props.list.map((data, index) => {
                    return (
                        <ResolveThread list={data} key={index} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { list: state.resolveReducer.resolveList }
}

const mapDispatchToProps = {
    showComplaintList
}

export default connect(mapStateToProps, mapDispatchToProps)(ResolveList)
