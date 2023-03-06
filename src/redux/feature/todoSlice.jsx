import { createSlice } from "@reduxjs/toolkit";


const initialState = [];


const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            state.push(action.payload)
        },
        deleteTodo : (state, action)=>{
            return state.filter((todo)=>todo.id !== action.payload)
        },
        completeTodo : (state, action)=>{
            const todoIndex = state.findIndex((todo)=>todo.id === action.payload.id);
            if(todoIndex !== -1){
                state[todoIndex].completed = action.payload.completed
            }
        }
    }
})

export const {addTodo, deleteTodo, completeTodo} = todoSlice.actions;

export default todoSlice.reducer