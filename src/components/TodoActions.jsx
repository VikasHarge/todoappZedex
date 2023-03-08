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
        <div className='w-4/5 h-full  py-8 pr-8 pl-14' >
            <h1 className='text-pm mb-6' >{`${todoFilter} Tasks`}</h1>
            <form className='w-full mb-4' onSubmit={handleSubmit} >
                <input
                    className='w-full h-12 pl-7 bg-lightPink rounded-2xl'
                    placeholder='Add a new task inside ‘All’ category'
                    value={todoText || ''}
                    onChange={e => setTodoText(e.target.value)}
                    disabled={todoFilter === 'Completed' ? true : false}
                />
            </form>
            <div className='w-full h-inherit overflow-y-auto bg-red' >
                {
                    displayTodos && displayTodos.map((todo, i) => (
                        <TodoList todo={todo} key={todo.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoActions