import React from 'react'

function Button({handleClick, children}) {
    console.log(`remdering Button ${children}`)
  return (
    <div>
        <p>
            <button type='button' onClick = {handleClick}>
                {children}
            </button>
        </p>
    </div>
  )
}

export default Button