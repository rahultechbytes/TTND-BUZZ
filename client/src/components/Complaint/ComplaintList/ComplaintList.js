import React, { Component } from 'react'
import { showComplaintList } from '../../../action/complaint.action';
import { connect } from 'react-redux'
import ComplaintThread from '../ComplaintThread/ComplaintThread';
import './table.css';
class ComplaintList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "All Complaints"
        }
    }
    componentDidMount() {
        this.props.showComplaintList();
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
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Department</th>
                            <th scope="col">Issue Id</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((data, index) => {
                            if (this.state.filter === "All Complaints") {
                                return (
                                    <ComplaintThread list={data} key={index} />
                                )
                            } else if (this.state.filter === data.status) {
                                return (
                                    <ComplaintThread list={data} key={index} />
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
    console.log("state of complaint reducer get", state.complaintReducer.complaintList);
    return { list: state.complaintReducer.complaintList }
}

const mapDispatchToProps = {
    showComplaintList
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplaintList)
