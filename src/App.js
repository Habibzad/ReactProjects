import React, { Component } from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.startCount = this.startCount.bind(this)
  }

  startCount() {
    this.setState(prev => {
      return {
        count: prev.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.startCount}>Start Count</button>
      </div>
    )
  }
}

export default App