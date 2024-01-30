import React, { useState } from 'react'

export function CrudExam() {
    const [name, setName] = useState('')
    const [allData, setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [editIndex, setEditIndex] = useState('')
    const HandleClick = () => {
        if (name.length !== 0) {
            setAlldata((Ndata) => [...Ndata, name])
            setName('')
        }
    }
    const HandleDelete = (index) => {
        allData.splice(index, 1)
        setAlldata([...allData])
    }
    const HandleEdit = (i) => {
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const HandleUpdate = () => {
        allData.splice(editIndex, 1, name)
        setAlldata([...allData])
        setName('')
        setShow(false)
    }
    return (
        <div style={{ margin: '30px 50px' }}>
            <input value={name} onChange={(e) => setName(e.target.value)} style={{ height: '40px', borderRadius: '30px', outline: 'none' }} />
            {!show ?
                <button className='btn btn-primary' onClick={HandleClick}>Add Data</button> :
                <button className='btn btn-primary' onClick={HandleUpdate}>Update</button>}
            {
                allData.map((val, i) =>
                    <div>
                        <h1>{val}</h1>
                        <button className='btn btn-success' onClick={() => HandleEdit(i)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => HandleDelete(i)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}
