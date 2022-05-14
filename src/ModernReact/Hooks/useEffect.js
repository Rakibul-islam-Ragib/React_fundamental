// import React, { Component } from 'react'

import { useEffect, useState } from "react"

// export default class UseEffect extends Component {
//     state = {
//         count: 0,
//         date: new Date(),
//     }

//     addClick = () => {
//         this.setState((prevState) => ({
//             count: prevState + 1,
//         }))
//     }

//     render() {
//         const {date} = this.state ;
//         return (
//         <div>
//             <p>Time: {date.toLocaleTimeString()} </p>
//             <p>
//                 <button type='button' onClick={this.addClick}> Click </button>
//             </p>
//         </div>
//         )
//     }
// }

// don't using lifecycle method

function UseEffect() {
    const[count, setCount] = useState(0);
    const[date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
    }
    //every rerender run this.
    useEffect(() => {
        console.log('update DoT')
        document.title = `Clicked ${count} times` ;
    }, [count])

    useEffect(()=>{
        console.log('Running clock')
        const interval = setInterval(tick, 1000);

        return () => {
            console.log('COMPONENT UNMOUNT')
            clearInterval(interval)
        }
    }, [])

    

    const addClick = () => {
        setCount((prevCount) => prevCount + 1)
    }

  return (
    <div>
        <p>Time: {date.toLocaleTimeString()} </p>
        <p>
            <button type = 'button' onClick={addClick}>
                Click
            </button>
        </p>
    </div>
  )
}

export default UseEffect

