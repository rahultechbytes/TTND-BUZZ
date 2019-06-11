import React, { Component } from 'react';
import Menu from './Menu';
import Complaint from '../Complaint'
import Resolve from '../Resolve';
import { Route } from 'react-router-dom';
import Buzz from '../Buzz';

class Dashboard extends Component {

    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <button onClick={this.logout}>Logout</button>
                    </nav>
                </header>
                <main>
                    <div>dashboard Component</div>
                    <aside>
                        <Menu />
                    </aside>
                    <section>
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
                </main>
            </div>
        )
    }
}

export default Dashboard;