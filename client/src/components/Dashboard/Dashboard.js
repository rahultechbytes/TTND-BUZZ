import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Resolve from '../Resolve/Resolve';
import { Route } from 'react-router-dom';
import Buzz from '../Buzz/BuzzManager/BuzzManager';
import Complaint from '../Complaint/ComplaintManager/ComplaintManager';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import './dashboardStyle.css'
class Dashboard extends Component {

    render() {
        return (
            <div className="bgColor">
                <Header history={this.props.history} />
                <Banner />
                <main className="container">
                    <div className="row">
                        <aside className="col-4 left">
                            <Menu />
                        </aside>
                        <section className="col-8 right">
                            <Route
                                exact path={`${this.props.match.path}/buzz`}
                                component={Buzz}
                            />
                            <Route
                                exact path="/dashboard/complaints"
                                component={Complaint}
                            />
                            <Route
                                exact path="/dashboard/resolve"
                                component={Resolve}
                            />
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard;