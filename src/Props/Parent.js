import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const HandleChild = (d)=>{
        console.log(d)
    }

  return (
    <div>

    <Child data={'Hello'} Func={HandleChild} />

    </div>
  )
}

export default Parent