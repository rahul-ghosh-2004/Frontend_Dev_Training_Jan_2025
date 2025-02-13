import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setData } from "../redux/feature/userSlice"

function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()

        dispatch(setData(user))
    }

    // console.log(user)

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
      <input type="email" placeholder='Enter email' onChange={(e) => {setUser((prev) => {return { ...prev, email: e.target?.value }})}}/>
      <input type="password" placeholder='Enter password' onChange={(e) => {setUser((prev) => {return { ...prev, password: e.target?.value }})}}/>
      </div>
      <button className='border border-slate-700' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage
