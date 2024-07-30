import React, { useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import ToDoItem from './ToDoItem'
import { useRef } from 'react'

const ToDo = () => {

    const [todoList, setTodoList] = useState([])

    const inputRef = useRef()


    const agregar = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }

        setTodoList((prev) => [...prev, newTodo])
        inputRef.current.value = "";
    }



  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        <div className='flex items-center mt-7 gap-2'>
            <img src={todo_icon} alt="" className='w-8' />
            <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} type="text" placeholder='Agrega tu tarea' className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' />
            <button onClick={agregar} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-sm font-medium cursor-pointer'>AGREGAR +</button>
        </div>

        <div>
            <ToDoItem/>
            <ToDoItem/>
        </div>

    </div>
  )
}

export default ToDo
