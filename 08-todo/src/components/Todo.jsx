import React from 'react'

function Todo({ todoText, id, deleteTodo, updateTodo }) {
  return (
        <div className='flex items-center justify-center gap-x-2 mb-5' id={id} key={id}>
          <input type="text" className='bg-slate-100 h-10 w-[450px] border border-zinc-800 outline-none px-2 rounded-xl' value={todoText} readOnly/>
          <button className='bg-zinc-800 text-slate-100 h-10 px-3 rounded-xl cursor-pointer hover:bg-slate-600' onClick={() => { updateTodo(id) }}>Update</button>
          <button className='bg-zinc-800 text-slate-100 h-10 px-3 rounded-xl cursor-pointer hover:bg-slate-600' id={id} onClick={() => {deleteTodo(id)}}>Delete</button>
        </div>
  )
}

export default Todo
