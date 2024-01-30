import React,{useState} from 'react'

const CrudImp = () => {
    const [value,setValue] = useState('')
    const [allData,setAlldata] =  useState([])
    const [show,setShow] = useState(false)
    const [editIndex,setEditIndex] =  useState('')
 
    const HandleAdd =()=>{
        if(value !== ''){
        setAlldata((Ndata)=>[...Ndata,value])
        setValue('')
        }
    }
    const HandleDelete = (index)=>{
       allData.splice(index,1)
       setAlldata([...allData])
    }
    const HandleEdit=(i)=>{
       setValue(allData[i])
        setEditIndex(i)
        setShow(true)  
    }
    const HandleUpdate=()=>{
      allData.splice(editIndex,1,value)
      setAlldata([...allData])
      setValue('')
      setShow(false)

    }
  return (
    <div className='m-3'>
       <input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
       {!show ? <button onClick={HandleAdd}>Add Data</button>:
       <button onClick={HandleUpdate}>Update</button>
  }
         {
            allData.map((val,i)=>
            <div>
                <h1>{val}</h1>
                <button onClick={()=>{HandleEdit(i)}} >Edit</button>
                <button onClick={()=>{HandleDelete(i)}} >Delete</button>
            </div>  
            )
         }
    </div>
  )
}

export default CrudImp