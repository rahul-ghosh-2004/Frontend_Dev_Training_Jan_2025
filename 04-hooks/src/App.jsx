import React, { useState } from "react"

function App() {
  const [name, setName] = useState("Full Name")
  const [password, setPassword] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  console.log(name)
  console.log(password)

  return (
    <div>
      <input type="text" onChange={handleName}/>
      <input type="password" onChange={handlePassword}/>

      <button>Login</button>
    </div>
  )
}

export default App