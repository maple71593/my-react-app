import React, { Component } from 'react'
import Welcome from './component/Welcome'
import Hello from './component/Hello'

export default class App extends Component {
    render() {
        return (
            <div>
                <Welcome />
                <Hello />
            </div>
        )
    }
}