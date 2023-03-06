import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/feature/todoSlice';
import TodoList from './TodoList';

const TodoActions = ({ todoFilter }) => {

    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const [todoText, setTodoText] = useState('');
    const [displayTodos, setDisplayTodos] = useState([]);

    useEffect(() => {

        if (todoFilter === 'Completed') {
            setDisplayTodos(() => {
                return todos.filter((todo) => {
                    return todo.completed === true;
                })
            })
            return
        }

        if (todoFilter === 'Active') {
            setDisplayTodos(() => {
                return todos.filter((todo) => {
                    return todo.completed === false;
                })
            })
            return
        }

        if (todoFilter === 'All') {
            setDisplayTodos(todos)
        }

    }, [todoFilter, todos])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText === '') {
            alert('Todo cant be empty');
            return;
        }

        //Create new Todo obj
        let todoObj = {
            id: Date.now(),
            todoText: todoText,
            completed: false,
        }

        dispatch(addTodo(todoObj));
        setTodoText('')
    }



    return (
        <div className='w-[774px]  py-[30px] pr-[43px] pl-[53px] bg-yellow' >
            <h1 className='text-pm mb-6' >{`${todoFilter} Tasks`}</h1>
            <form className='w-[678px] mb-[16px]' onSubmit={handleSubmit} >
                <input
                    className='w-[678px] h-[47px] pl-[27px] bg-lightPink rounded-2xl'
                    placeholder='Add a new task inside ‘All’ category'
                    value={todoText || ''}
                    onChange={e => setTodoText(e.target.value)}
                />
            </form>
            {
                displayTodos.length > 0 ? <>
                    <div className='w-full h-100' >
                        {
                            displayTodos.map((todo, i) => (
                                <TodoList todo={todo} key={todo.id} />
                            ))
                        }
                    </div>
                </> : <></>
            }
        </div>
    )
}

export default TodoActions