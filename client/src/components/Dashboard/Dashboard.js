import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Resolve from '../Resolve/Resolve';
import { Route, Switch } from 'react-router-dom';
import NoMatch from '../Error/NoMatch';
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
                            <Switch>
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
                                <Route
                                    // path='/404'
                                    // exact={true}
                                    component={NoMatch}
                                />
                                {/* <Redirect from='*' to='/404' /> */}
                            </Switch>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default Dashboard;