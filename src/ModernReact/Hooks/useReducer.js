import React, { useReducer } from 'react';
import styled from 'styled-components';

 const initState = 5;
 const initState2 = 0;

 const reducer = (state, action) => {
     switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement' :
            return state - 1;
        default :
            return state;
        
     }
 }

export default function Reduce() {
    const [count, dispatch] = useReducer(reducer, initState) ;
    const [count2, dispatch2] = useReducer(reducer, initState2) ;


  return (
    <div>
        <P>
            count : {count}
        </P>
        <Button type = 'button' onClick = {() => dispatch('increment')}>Increment</Button>
        <Button type = 'button'  onClick={() => dispatch('decrement')}>Decrement</Button>

        <P>
            count2 : {count2}
        </P>
        <Button type = 'button' onClick = {() => dispatch2('increment')}>Increment</Button>
        <Button type = 'button'  onClick={() => dispatch2('decrement')}>Decrement</Button>

    </div>
  )
}

const Button = styled.button `
    background-color: black;
    font-size: 18px;
    margin: 0 10px;
    color: white;
    padding: .5rem 1.5rem;
    border: 1px solid #fff;
    border-radius: 25px;
    cursor: pointer;

    &:hover{
            background-color: #fff;
            color: #000;
            border: 1px solid #000;
    }

`
const P = styled.p`
    font-size: 25px;
    background-color: papayawhip;
    color: palevioletred;
`

