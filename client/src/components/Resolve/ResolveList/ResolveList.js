import React, { Component } from 'react'
import { showComplaintList } from '../../../action/resolve.action';
import { connect } from 'react-redux'
import ResolveThread from '../ResolveThread/ResolveThread';
import './resolveListStyle.css' 

class ResolveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints"
        }
    }
    componentDidMount() {
        this.props.showComplaintList()
    }

    handleOnChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    }

    render() {
        return (
            <div className="table-wrapper">
                <header className="table-header">
                    <span className="left">
                        {this.state.filter}
                    </span>
                    <span className="right">
                        <select name="filter" onChange={this.handleOnChange}>
                            <option value="All Complaints">All Complaints</option>
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
                            if (this.state.filter === "All Complaints") {
                                return (
                                    <ResolveThread list={data} key={index} />
                                )
                            } else if (this.state.filter === data.status) {
                                return (
                                    <ResolveThread list={data} key={index} />
                                )
                            }
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
