import React from 'react'

const Child = (props) => {
   const HandleClick = ()=>{
    console.log('Hello Child')
   }
  return (
    <div>{props.data}
    <button onClick={HandleClick}>Click Me!</button>
    </div>

  )
}

export default Child