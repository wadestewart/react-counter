import React, { Component } from 'react'
import Header from './Header'
import ContainerList from './ContainerList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContainerList data={this.props.data} />
      </div>
    )
  }
}

export default App
