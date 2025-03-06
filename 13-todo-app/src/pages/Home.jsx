import Todo from '@/components/Todo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

function Home() {
    const [ text, setText ] = useState("")
    const [ todos, setTodos ] = useState([])
    const navigate = useNavigate()

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

    const checkCurrentUser = async () => {
        try {
            const requestInstance = await axios.get(
                import.meta.env.VITE_CURRENT_USER,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            // console.log(requestInstance);
            toast.success("Authorized user!")
        } catch (error) {
            // console.log(error);
            navigate("/auth")
        }
    }

    const handleCreateTodo = async () => {
        try {
            const requestInstance = await axios.post(
                import.meta.env.VITE_CREATE_TODO,
                { todoText: text },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(requestInstance?.data?.message);
            toast.success(requestInstance?.data?.message)
            setText("")
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong!")
        }
    }

    const getTodos = async () => {
        try {
            const requestInstance = await axios.get(
                import.meta.env.VITE_GET_TODO_LIST,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            // console.log(requestInstance?.data?.data);
            setTodos(requestInstance?.data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    console.log(todos);

    useEffect(() => {
        checkCurrentUser()
        // getTodos()
    }, [])

    useEffect(() => {
        getTodos()
    }, [handleCreateTodo])
  return (
    <div className='min-h-screen w-full flex items-center justify-start flex-col'>
        <Toaster position="bottom-right"
                reverseOrder={false}/>
        <div className='w-[550px] flex gap-x-2 mt-10'>
            {/* Input and Button */}
            <Input type="text" placeholder="Please enter a text ..." className="lg:min-w-80 md:min-w-72 sm:min-w-64" onChange={(e) => { setText(e.target?.value) }} value={text}/>
            <Button onClick={handleCreateTodo}>Add</Button>
        </div>

        <div className='mt-16 flex items-center justify-evenly flex-wrap gap-x-5 gap-y-5'>
            {/* Todo listing out */}
            {
                todos?.length === 0 ? "Todo not found!" : (
                    todos.map((value) => {
                        return <Todo todoText={value?.todoText} key={Math.random()}/>
                    })
                ) 
            }
        </div>
    </div>
  )
}

export default Home