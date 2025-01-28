import React, { useState } from 'react'
import Todo from './components/Todo'
import toast, { Toaster } from "react-hot-toast"

function App() {
  const [ text, setText ] = useState("")
  const [ todos, setTodos ] = useState([])

  const addTodo = () => {
    if (text?.trim() === "") return;

    const todo = {
      todoText: text,
      id: Date.now(),
      isCompleted: false
    }

    setTodos((prev) => {
      return [
        ...prev, todo
      ]
    })

    setText("")

    toast.success("Todo added successfully!")
  }

  // filter ek advance loop hai jo ek array ko return karta hai

  const deleteTodo = (id) => {
    return setTodos((prev) => {
      toast.success("Todo deleted successfully!")
      return prev.filter((value) => value.id !== id)
    })
  }

  const updateTodo = (id) => {
    const newText = prompt();

    if (newText?.trim() === "") return;

    setTodos((prev) => {
      return prev.map((value) => {
        if (value.id === id) {
          return { ...value, todoText: newText }
        }

        return value;
      })
    })
    toast.success("Todo Updated successfully!")
  }

  console.log(text)
  return (
    <div>
      <Toaster />
      <div
        className='h-screen w-full bg-zinc-300 flex items-center justify-center flex-col gap-y-7'
      >
        <h1 className='text-3xl font-bold text-zinc-700'>Todo Application</h1>

        <div>
          <input type="text" placeholder='Add your todo ...' className='bg-slate-100 h-10 w-[450px] border border-zinc-800 outline-none px-2 rounded-l-xl' onChange={(e) => setText(e.target.value)} value={text}/>
          <button className='bg-zinc-800 text-slate-100 h-10 px-3 rounded-r-xl cursor-pointer hover:bg-slate-600' onClick={addTodo}>add</button>
        </div>

        <div>
          {
            todos?.length > 0 ? todos.map((value) => {
              return <Todo todoText={value.todoText} id={value.id} key={value.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            }) : "Please add a todo ...." 
          }
        </div>
      </div>

    </div>
  )
}

export default App
