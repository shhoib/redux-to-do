import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editTask } from './todoSlice';
import './home.css'

const EditTodo = () => {

    const [editValue, setEditValue] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = useParams()
    const index = parseInt(id.id)

    const editHandle=()=>{    
       dispatch(editTask({ index , editValue }))
       alert("Edited succesfully")
       navigate('/')
    }

  return (
    <div className='mainTable'>
    <input className='inputBox' type="text" onChange={e=>setEditValue(e.target.value)}/>
    <Button onClick={()=> editHandle()}>edit</Button>
    </div>
  )
}

export default EditTodo