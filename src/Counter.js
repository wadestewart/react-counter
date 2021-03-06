import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)

        this.state = {
            count: 0
        }
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

    render() {
        return (
            <div className="Counter">
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Counter
