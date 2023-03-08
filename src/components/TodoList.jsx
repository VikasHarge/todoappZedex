import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/feature/todoSlice';
import { BsCheck } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const TodoList = ({ todo }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(completeTodo({ id: todo.id, completed: !todo.completed }))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div className='w-full pt-4 flex relative group'>
            {
                !todo.completed ? <>
                    <div
                        className='w-7 h-7 rounded-2xl border border-solid border-darkGrey'
                        onClick={handleComplete}
                    ></div>
                </> : <>
                    <div
                        className='w-7 h-7 rounded-2xl border bg-darkGrey border-solid border-darkGrey opacity-50 flex items-center justify-center'
                        onClick={handleComplete}
                    >
                        <BsCheck className='text-pm fill-white' />
                    </div>
                </>
            }
            <h2 className={`pl-5 text-th text-darkGrey ${todo.completed ? 'opacity-50 line-through' : ''}`} >{todo.todoText}</h2>

            <div className='w-7 h-7 flex items-center justify-center absolute right-0 cursor-pointer hidden group-hover:block' onClick={handleDelete}>
                <RiDeleteBin6Line className='text-sd1 fill-red ' />
            </div>

        </div>
    )
}

export default TodoList