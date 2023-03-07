import React, { useState } from 'react'
import TodoActions from './TodoActions'

const TodoBox = () => {

    const [todoFilter, setTodoFilter] = useState('All')

    return (
        <div className='w-4/5 h-4/5 bg-[#ffffff] rounded-lg shadow-10xl flex' >
            <div className='w-[209px] h-100 border-r-[1px] border-r-[#D8D8D8]'>
                <nav>
                    <ul className='flex items-start justify-center flex-col pl-[51px] pt-[139px] gap-6'>
                        <li className={`w-full cursor-pointer ${todoFilter === 'All' ? 'text-sd1 text-pink' : 'text-sd2'}`} onClick={()=>setTodoFilter('All')} >All</li>
                        <li className={`w-full cursor-pointer ${todoFilter === 'Active' ? 'text-sd1 text-pink' : 'text-sd2'}`} onClick={()=>setTodoFilter('Active')} >Active</li>
                        <li className={`w-full cursor-pointer ${todoFilter === 'Completed' ? 'text-sd1 text-pink' : 'text-sd2'}`} onClick={()=>setTodoFilter('Completed')}>Completed</li>
                    </ul>
                </nav>
            </div>
            <TodoActions {...{todoFilter}} />
        </div>

    )
}

export default TodoBox