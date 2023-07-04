import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    tasks : [],
};

const todoSlice = createSlice({
    name : 'todo',
    initialState :INITIAL_STATE,
    reducers : {
        addTask : (state,action) => {
            const { text,id} = action.payload;
            state.tasks.push({ text,id})
        },
        removeTask : (state,action)=>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
         editTask : (state,action)=>{
            const { index , editValue  } = action.payload;
            state.tasks[index].text = editValue
         }
    }
}) 

export const {addTask,removeTask, editTask } = todoSlice.actions;

export default todoSlice.reducer; 