import Todo from '@/components/Todo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function Home() {
    const todoList = [
        {
            todoText: "Front-End Project"
        },
        {
            todoText: "Back-End Project"
        },
        {
            todoText: "Python Project"
        },
        {
            todoText: "Nodejs Project"
        },
        {
            todoText: "Django Project"
        }
    ]
  return (
    <div className='min-h-screen w-full flex items-center justify-start flex-col'>
        <div className='w-[550px] flex gap-x-2 mt-10'>
            {/* Input and Button */}
            <Input type="text" placeholder="Please enter a text ..." className="lg:min-w-80 md:min-w-72 sm:min-w-64"/>
            <Button>Add</Button>
        </div>

        <div className='mt-16 flex items-center justify-evenly flex-wrap gap-x-5 gap-y-5'>
            {/* Todo listing out */}
            {
                todoList?.length === 0 ? "Todo not found!" : (
                    todoList.map((value) => {
                        return <Todo todoText={value?.todoText} key={Math.random()}/>
                    })
                ) 
            }
        </div>
    </div>
  )
}

export default Home