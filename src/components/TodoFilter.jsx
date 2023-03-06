import React from 'react'

const TodoFilter = () => {
  return (
    <div className='w-[209px] h-100 border-r-[1px] border-r-[#D8D8D8]'>
        <nav>
            <ul className='text-sd2 flex items-start justify-center flex-col pl-[51px] pt-[139px] gap-6'>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        </nav>
    </div>
  )
}

export default TodoFilter