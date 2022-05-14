import React, { useEffect, useRef } from 'react'

export default function User() {
    const inpRef = useRef(null); 

    useEffect(() => {
        inpRef.current.focus();
    }, [])

  return (
    <div>
        <p>
            <input ref={inpRef} type = 'text' placeholder='Text Here'></input>
        </p>
    </div>
  )
}
