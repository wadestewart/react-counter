import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()

        this.state({
            count: 0
        })

        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    render() {
        return (
            <div>
                <h4>Counter: {this.state.counter}</h4>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }

    handleDecrement() {
        let count = this.state.count -1

        this.setState({
            count
        })
    }

    handleIncrement() {
        let count = this.state.count +1

        this.setState({
            count
        })
    }
}

export default Counter
