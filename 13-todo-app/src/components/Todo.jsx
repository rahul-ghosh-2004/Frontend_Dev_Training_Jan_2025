import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

function Todo({ todoText, _id, deleteTodo }) {
    console.log(_id);
  return (
    <div
        className='h-36 bg-slate-200 rounded-xl flex items-center justify-center flex-col gap-y-5'
    >

        <div>
            {/* Displaying the todo text */}
            <p className='h-16 w-64 rounded-xl text-center'>
                {
                    todoText
                }
            </p>
        </div>

        <div className='flex gap-x-3'>
            {/* Buttons for deleting and updating */}
            <Button className="bg-green-500 hover:bg-green-700">Update</Button>
            <Button className="bg-red-500 hover:bg-red-700" onClick={() => {deleteTodo(_id)}}>Delete</Button>
        </div>
    </div>
  )
}

export default Todo