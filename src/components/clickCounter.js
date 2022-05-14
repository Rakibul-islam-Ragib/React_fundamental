import React, { Component } from 'react'

export default class clickCounter extends Component {

  render() {
    const {count,incrementCount} = this.props;
    return (
      <div>
        <button type='button' onClick={incrementCount}>click {count} times</button>
      </div>
    )
  }
}
