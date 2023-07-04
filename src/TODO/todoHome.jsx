import { useState } from 'react';
import {Button,Table } from 'react-bootstrap';
import {useDispatch, useSelector}  from "react-redux";
import { addTask ,removeTask} from './todoSlice';
import { useNavigate } from 'react-router-dom';
import './home.css'


const TodoHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const tasks = useSelector((state)=>state.todo.tasks)
  const ID = Math.floor(Math.random()*1000);
  const [inputValue, setInputValue] = useState({text:"",id:ID});

 
  const handleAddItems=()=>{
     dispatch(addTask(inputValue));
     setInputValue({text:'',id:ID})
  } 

  const handleDeleteTask=(task)=>{
    const confirmed = window.confirm('Are you sure?')
    if(confirmed){
      dispatch(removeTask(task.id))
    }else{
      null
    }
  }

    
  return (
    
    <div className='mainTable'>
    <div className='homeTable'>
      <input className='inputBox' type="text" placeholder='Enter a Task' 
       value={inputValue.text} onChange={(e) => setInputValue({...inputValue,text:e.target.value})} />
      <Button className='m-3' variant='success' onClick={() => handleAddItems()}>Add</Button>
      
      {Array.isArray(tasks) && tasks.length<=0  ? null: 
      <Table className='table' striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>SL.No</th>
            <th>TODOS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => ( 
            <tr key={index+1}>
              <td>{index+1}</td>
              <td>{task?.text}</td>
              <td>
                <Button variant='primary' onClick={() => navigate(`/edit/${index}`)}>Edit</Button>
              </td>
              <td>
                <Button variant='danger' onClick={() => handleDeleteTask(task)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      }
    </div>
    </div>
  );
};
  


export default TodoHome



// <div>
    //   <input type="text" placeholder='Enter a Task' onChange={(e)=> setInputValue(e.target.value)}/>
    //   <Button onClick={()=>handleAddItems()}>Add</Button>

      
    //       <Table striped bordered hover key={index}>
    //         <thead>
    //           <tr>
    //             <th>SL.No</th>
    //             <th>TODOS</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //       {tasks.map(task => (
    //           <tr>
    //             <td>{index}</td>
    //             <td>{task}</td>
    //             <td><Button  onClick={() => handleDeleteTask(task.id)}>Delete</Button></td>
    //             <td><Button  onClick={()=> navigate(`/edit/${index}`)}> Edit </Button></td>
    //           </tr>
    //         </tbody>

    //       </Table>
    //     ))}
      

    // </div>
    // )

