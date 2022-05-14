import React, {useState} from 'react'
import Reactdom from 'react-dom'
//create a useState.....
// function Usestate() {
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState(null);

//     const handleInput = (event) => {
//         const inputValue = event.target.value;
//         const updateWarning = inputValue.includes('.js') ? 'You need to more skilled in javascript language if you have to do it. ' : null ;

//     setTodo(inputValue);
//     setWarning(updateWarning);

//     };

//   return (
//     <div>
//         <p>{todo}</p>
//         <p>
//             <textarea name='todo' value={todo} onChange={handleInput} />
//         </p>
//         <hr/>
//         <h2>{warning || 'Good choise!'}</h2>

//     </div>
//   )
// }

// export default Usestate

function Usestate () {
  const [todo, setTodo] = useState({
    title: '',
    description: ''
  })

  const {title, description} = todo;

  return (
    <div>
        <p>{title}</p>
        <p>
          <input type='text' value = {title} onChange = {(e) => setTodo({
            ...todo, //object spreading system
            title: e.target.value,
          })} />
        </p>
        <hr/>
        <p>
          <p>{description}</p>
          <textarea type='text' value = {description} onChange = {(e) => setTodo({
            ...todo,
            description: e.target.value,
          })} />
        </p>
    </div>
  )

}

export default Usestate;