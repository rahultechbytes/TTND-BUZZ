import React, { Component } from 'react'
import Form from './Dashboard/Form';
import Feeds from './Feeds';

export default class Buzz extends Component {
    render() {
        return (
            <div>
                <Form/>
                <hr/>
                <Feeds/>
            </div>
        )
    }
}

