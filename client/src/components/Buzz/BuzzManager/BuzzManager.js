import React, { Component } from 'react'
import BuzzForm from '../BuzzForm/BuzzForm';
import BuzzFeeds from '../BuzzFeeds/BuzzFeeds';

export default class Buzz extends Component {
    render() {
        return (
            <div>
                <BuzzForm/>
                <BuzzFeeds/>
            </div>
        )
    }
}

