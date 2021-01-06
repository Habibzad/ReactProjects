import React, { Component } from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }

    {/* Bind the functions to the class */ }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  };

  increment() {
    this.setState(function (prev) {
      return { counter: prev.counter + 1 }
    })
  }

  decrement() {
    this.setState(prevState => {
      if (prevState.counter > 0) {
        return { counter: prevState.counter - 1 }
      }
      else {
        return { counter: 0 }
      }
    })
  }

  reset() {
    this.setState((prev) => {
      if (prev.counter > 0) {
        return { counter: 0 }
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Increment</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default Counter