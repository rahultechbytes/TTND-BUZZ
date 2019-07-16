import React from 'react';
// import ComplaintThread from '../ComplaintThread/ComplaintThread';
import ComplaintThread from '../../ComplaintThread/ComplaintThread';
import './table.css';

const ComplaintList = (props) => {
    return (
        <div className="table-wrapper">
            <header className="table-header">
                <span className="left">
                    {props.filter}
                </span>
                <span className="right">
                    <select name="filter" onChange={() => props.handleOnChange(event)}>
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
                    {props.list.map((data, index) => {
                        return (
                            <ComplaintThread
                                list={data}
                                key={index}
                                role={props.role}
                            />
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default ComplaintList;