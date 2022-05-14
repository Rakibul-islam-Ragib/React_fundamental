//HOC formate.........
// import React from 'react'
// import WithCounter from './Hoc/withCounter'

// function hoverCounter (props) {
//     const {count, incrementCount} = props;

//   return (
//     <div>
//         <h1 type='button' onMouseOver={incrementCount}>Click {count} times</h1>
//     </div>
//   )
// }

// export default WithCounter(hoverCounter)

import React, { Component } from 'react'

export default class hoverCounter extends Component {

  render() {
    const {count,incrementCount} = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>click {count} times</h1>
      </div>
    )
  }
}
