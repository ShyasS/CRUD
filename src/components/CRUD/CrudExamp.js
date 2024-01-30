import { all } from 'axios';
import React,{useState} from 'react'

const CrudExamp = () => {
    const [name,setName] = useState('');
    const [allData,setAlldata] = useState([])
    const [show,setShow] = useState(false)
    const [editIndex,setEditIndex] = useState('')

    const HandleAdd = () =>{
        if(name !== ''){
        setAlldata((Ndata)=>[...Ndata,name])
        setName('')
        }
    }
    const HandleDelete=(index)=>{
     allData.splice(index,1)
     setAlldata([...allData])
    }
    const HandleEdit=(i)=>{
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    } 
    const Handleupdate=()=>{
        allData.splice(editIndex,1,name)
        setAlldata([...allData])
        setShow(false)
        setName('')
    } 

  return (
    <div style={{margin:'20px'}}>
       <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
      {!show ? <button onClick={HandleAdd}>Add</button>:
       <button onClick={Handleupdate}>Update</button>
  }
       {
        allData.map((val,i)=>
          <div>
              <h1>{val}</h1>
              <button onClick={()=>HandleEdit(i)}>Edit</button>
              <button onClick={()=>HandleDelete(i)}>Delete</button>
          </div>
        )
       }
    </div>
  )
}

export default CrudExamp