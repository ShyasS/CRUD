import React,{useState,useRef} from 'react'

const CounterFunc = () => {
    const [data,setData] = useState(0)
    const countRef = useRef(0)
    console.log('Count',data)
    console.log('CountRef',countRef.current)
  return (
    <div>
         <h1>Count: {data}</h1>
         <button onClick={()=>{setData(data +1)}}>Count</button>
         <h1>CountRef : {countRef.current}</h1>
         <button onClick={()=>{countRef.current++}}>CountRef</button>
    </div>
  )
}

export default CounterFunc