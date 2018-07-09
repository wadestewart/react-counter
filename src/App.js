import React, { Component } from 'react'
import Header from './Header'
import ContainerList from './ContainerList'

class App extends Component {

  constructor() {
    super()

    this.addCounter = this.addCounter.bind(this)
    this.subtractCounter = this.subtractCounter.bind(this)

    this.state = {
      counters: 5
    }
  }

  addCounter() {
    let counters = this.state.counters +1

    this.setState({
      counters: this.state.counters
    })
  }

  subtractCounter() {
    let counters = this.state.counters -1

    this.setState({
      counters: this.state.counters
    })
  }

  render() {
    return (
      <div className="App">
        <Header addCounter={this.addCounter} subtractCounter={this.subtractCounter}/>
        <ContainerList counter={this.state.counters}/>
      </div>
    )
  }
}

export default App
