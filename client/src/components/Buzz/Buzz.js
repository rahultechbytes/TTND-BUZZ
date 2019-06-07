import React, { Component } from 'react';
// import Logout from '../auth/Logout'
// import { Redirect } from 'react-router-dom';

class Buzz extends Component {


    logout = () => {
        console.log("in logout", localStorage.getItem("token"));
        localStorage.removeItem('token');
        this.props.history.push('/')
    }

    render() {
        console.log("local storage", localStorage.getItem("token"));
        return (
            <div>
                <header>
                    <nav>
                        <button onClick={this.logout}>Logout</button>
                    </nav>
                    <img src="" alt="" />
                </header>
                <main>
                    <div>buzz Component</div>
                    <aside></aside>
                    <section>
                        <form action=""></form>
                        <article></article>
                    </section>
                </main>
            </div>
        )
    }
}

export default Buzz;