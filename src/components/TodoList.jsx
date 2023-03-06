import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { completeTodo, deleteTodo } from '../redux/feature/todoSlice';
import { BsCheck } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'

const TodoList = ({ todo }) => {
    const dispatch = useDispatch();

    const [showDelete, setShowDelete] = useState(false)

    const handleComplete = () => {
        dispatch(completeTodo({ id: todo.id, completed: !todo.completed }))
    }

    const handleDelete = ()=>{
        dispatch(deleteTodo(todo.id))
    }

    return (
        <div className='w-full pt-[16px] flex relative' onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)} >
            {
                !todo.completed ? <>
                    <div
                        className='w-[28px] h-[28px] rounded-2xl border-[1px] border-solid border-[#5A5A5A]'
                        onClick={handleComplete}
                    ></div>
                </> : <>
                    <div
                        className='w-[28px] h-[28px] rounded-2xl border-[1px] bg-[#5A5A5A] border-solid border-[#5A5A5A] opacity-50 flex items-center justify-center'
                        onClick={handleComplete}
                    >
                        <BsCheck className='text-pm fill-[#ffff]' />
                    </div>
                </>
            }
            <h2 className={`pl-[18px] text-th text-[#5A5A5A] ${todo.completed ? 'opacity-50 line-through' : ''}`} >{todo.todoText}</h2>
            {
                showDelete ? <>
                    <div className='w-[28px] h-[28px] flex items-center justify-center absolute right-0 cursor-pointer' onClick={handleDelete}>
                        <RiDeleteBin6Line className='text-sd1 fill-red ' />
                    </div></> : <></>
            }

        </div>
    )
}

export default TodoList