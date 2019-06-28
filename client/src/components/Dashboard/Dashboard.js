import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu';
// import Resolve from '../Resolve/Resolve';
import Resolve from '../Resolve/ResolveList/ResolveList';
import { Route, Switch, Redirect } from 'react-router-dom';
import NoMatch from '../Error/NoMatch';
import Buzz from '../Buzz/BuzzManager/BuzzManager';
import Complaint from '../Complaint/ComplaintManager/ComplaintManager';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import './dashboardStyle.css'
class Dashboard extends Component {

    render() {
        console.log("#########", this.props.role);
        return (
            <div className="bgColor">
                <Header history={this.props.history} />
                <Banner />
                <main className="container-fluid">
                    <div className="row">
                        <aside className="col-md-4 left">
                            <Menu />
                        </aside>
                        <section className="col-md-8 right">
                            <Switch>
                                <Route
                                    exact path={`${this.props.match.path}/buzz`}
                                    component={Buzz}
                                />
                                <Route
                                    exact path="/dashboard/complaints"
                                    component={Complaint}
                                />
                                {(this.props.role === 'admin') ? <Route exact path="/dashboard/resolve" component={Resolve} /> : null}

                                <Route
                                    path='/404'
                                    component={NoMatch}
                                />
                                <Redirect from='*' to='/404' />
                            </Switch>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { role: state.userReducer.userData.role }
}
export default connect(mapStateToProps, null)(Dashboard);