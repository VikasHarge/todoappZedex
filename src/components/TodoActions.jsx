import React, { useState } from 'react'

const TodoActions = () => {

    const [todoText, setTodoText] = useState('');
    const [displayTodos, setDisplayTodos] = useState([]);


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(todoText === ''){
            alert('Todo cant be empty')
        }
    }



  return (
    <div className='w-[774px]  py-[30px] pr-[43px] pl-[53px] bg-yellow' >
        <h1 className='text-pm mb-6' >All Tasks</h1>
        <form className='w-[678px]' onSubmit={handleSubmit} >
            <input 
                className='w-[678px] h-[47px] pl-[27px] bg-lightPink rounded-2xl' 
                placeholder='Add a new task insdie ‘All’ category' 
                value={todoText || ''}
                onChange={e=>setTodoText(e.target.value)}
            />
        </form>
    </div>
  )
}

export default TodoActions