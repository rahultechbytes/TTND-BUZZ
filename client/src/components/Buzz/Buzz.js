import React, { Component } from 'react'
import Form from '../Form/Form';
import Feeds from '../Feeds/Feeds';

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

