import Todo from '@/components/Todo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { LoaderCircle } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '@/redux/features/todoSlice'

function Home() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const todoData = useSelector(state => state?.todos?.data)

    console.log(todoData);

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

    const deleteTodo = async (id) => {
        try {
            const requestInstance = await axios.delete(
                import.meta.env.VITE_DELETE_TODO,
                {
                    data: { "_id": id },
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            console.log(requestInstance);
        } catch (error) {
            console.log(error);
        }
    }

    // const updateTodo = async (id, todoText) => {
    //         data: {
    //             "_id": id,
    //             "todoText": todoText
    //         }
    // }

    const getTodos = async () => {
        try {
            setLoadingStatus(true)
            const requestInstance = await axios.get(
                import.meta.env.VITE_GET_TODO_LIST,
                {
                    withCredentials: true,  // Take the access of browser cookies
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            setLoadingStatus(false)

            // console.log(requestInstance?.data?.data);
            setTodos(requestInstance?.data?.data)
            dispatch(addTodo(requestInstance?.data?.data))
        } catch (error) {
            console.log(error);
            setLoadingStatus(false)
        }
    }

    console.log(todos);

    useEffect(() => {
        checkCurrentUser()
        // getTodos()
    }, [])

    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div className='min-h-screen w-full flex items-center justify-start flex-col'>

            <Toaster position="bottom-right"
                reverseOrder={false} />
            <div className='w-[550px] flex gap-x-2 mt-10'>
                {/* Input and Button */}
                <Input type="text" placeholder="Please enter a text ..." className="lg:min-w-80 md:min-w-72 sm:min-w-64" onChange={(e) => { setText(e.target?.value) }} value={text} />
                <Button onClick={handleCreateTodo}>Add</Button>
            </div>

            <div className='mt-16 flex items-center justify-evenly flex-wrap gap-x-5 gap-y-5'>
                {/* Todo listing out */}
                {
                    todoData?.length === 0 ? "Todo not found!" : (
                        todoData.map((value) => {
                            return <Todo todoText={value?.todoText} _id={value?._id} deleteTodo={deleteTodo} updateTodo={""} key={Math.random()} />
                        })
                    )
                }
            </div>
        </div>
    )
}

export default Home