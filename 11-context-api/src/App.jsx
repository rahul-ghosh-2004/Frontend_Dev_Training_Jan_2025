import React from "react"
import LoginForm from "./components/LoginForm"
import ProfilePage from "./components/ProfilePage"
import LoginContextProvider from "./context/LoginContextProvider"

function App() {
  return (
    <LoginContextProvider>
      <LoginForm />
      <ProfilePage />
    </LoginContextProvider>
  )
}

export default App