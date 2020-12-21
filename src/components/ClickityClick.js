import React, { Component } from 'react';

export default class ClickityClick extends Component {

  constructor() {
    super()
    this.state={
      hasBeenClicked: false
    }
  }

  handleOnClick = () => {
    this.setState(previousState => {
      return {
      hasBeenClicked: !previousState.hasBeenClicked
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Click me!</button>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
      </div>
    )
  }
}
