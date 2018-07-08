import React, { Component } from 'react'
import Counter from './Counter'

class ContainerList extends Component {
    render() {
        let counters = []
        for (let i = 0; i < this.props.counter; i++) {
            counters.push(<Counter />)
        }
        return <div className="Counter-row">{counters}</div>
    }
}

export default ContainerList
