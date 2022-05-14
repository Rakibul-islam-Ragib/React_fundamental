import React from 'react'

function ShowCount({title, count}) {
    console.log(`Rendering ${title}`)
  return (
    <div>
        <p>
            {title} is {count}
        </p>
    </div>
  )
}

export default ShowCount