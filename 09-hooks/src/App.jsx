import React, { useState, useCallback, useEffect } from 'react'

function App() {
  let [passwordLength, setPasswordLength] = useState(8)
  let [ password, setPassword ] = useState("")

  const handlePassLengthIncrese = () => {
    setPasswordLength(passwordLength + 1)
  }

  const handlePassLengthDecrese = () => {
    if (passwordLength === 8) return;
    setPasswordLength(passwordLength - 1)
  }

  const generateRandomPassword = useCallback(() => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&+={}[]?/"
    let pass = ""

    for (let i = 0; i < passwordLength; i++) {
      pass = pass + characters[Math.floor(Math.random() * 76)]
    }

    setPassword(pass)
  }, [passwordLength])

  useEffect(() => {
    generateRandomPassword()
  }, [ passwordLength ])

  return (
    <div>
      <div className='h-screen w-full bg-stone-400 flex items-center justify-center flex-col gap-y-5'>
        <input type="text" className='w-96 outline-none border border-zinc-700 h-10 px-3 text-center rounded-lg' value={password} readOnly/>

        <div className='flex gap-x-2 items-center justify-center'>
          <button className='py-1 px-4 outline-none bg-zinc-600 text-slate-100 rounded-lg font-bold text-xl' onClick={handlePassLengthIncrese}>+</button>
          <input type="text" className='h-10 w-14 rounded-lg outline-none border border-slate-700 text-center' value={passwordLength} readOnly />
          <button className='py-1 px-4 outline-none bg-zinc-600 text-slate-100 rounded-lg font-bold text-xl' onClick={handlePassLengthDecrese}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App
