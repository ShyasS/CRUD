import React,{useMemo, useState} from 'react';

export function CRUD(){
    const [name,setName] = useState('');
    const [alldata,setAlldata] = useState([]);
    const [show,setShow] = useState(false);
    const [editIndex,setEditIndex] = useState('');
 
    const HandleAdd =()=>{
        if(name.length !== 0){
       setAlldata((Ndata)=>[...Ndata,name]);
       setName('')
       console.log(alldata)
        }
    }
    const HandleDelete = (index) =>{
       alldata.splice(index,1);
       setAlldata([...alldata])
    }
   const HandleEdit =(i)=>{
     setName(alldata[i]);
     setShow(true)
     setEditIndex(i)
   }
   const HandleUpdate =()=>{
       alldata.splice(editIndex,1,name);
       setName('')
       setShow(false)
       setAlldata([...alldata]);
   }
    return(
        <div style={{margin:'30px 200px'}}>
         <input value={name} onChange={(e)=>setName(e.target.value)}/>
        {!show ? <button onClick={HandleAdd}>Add Data</button>:
         <button onClick={HandleUpdate}>Update</button>}
         {
            alldata.map((val,i) =>
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