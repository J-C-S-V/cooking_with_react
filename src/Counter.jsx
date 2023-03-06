import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: this.props.initialCount,
    };
  }

  render() {
    return (
      <>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </>
    );
  }

  changeCount(amount) {
    this.setState((prevState) => {
      return { count: prevState.count + amount };
    });
    // this.setState({ count: this.state.count + amount }); This is not a good way to do it because it is not guaranteed to be the current state of the component and can cause issues. This is why we use the function version of setState. This is because setState is asynchronous and can cause issues if you are trying to update the state based on the current state.
  }
}
