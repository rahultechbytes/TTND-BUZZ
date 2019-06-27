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
            <div className="table-wrapper">
                <header className="table-header">
                    <span className="left">
                        Your Complaints
                    </span>
                    <span className="right">
                        <select name="" id="">
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Resolved">Resolved</option>
                        </select>
                    </span>
                </header>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Department</th>
                            <th scope="col">Issue Id</th>
                            <th scope="col">Locked By</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((data, index) => {
                            return (
                                <ResolveThread list={data} key={index} />
                            )
                        })}
                    </tbody>
                </table>
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
