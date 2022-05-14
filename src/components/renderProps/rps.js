import React, { Component } from 'react'

export default class renderProps extends Component {
    state = {
        count: 0,
      }
    incrementCount = () =>{
      this.setState ((prevState) => ({count: prevState.count + 1}));
    }

  render() {
    const {count} = this.state ;
    const {counter} = this.props ; 

    return counter(count, this.incrementCount)
  }
}
