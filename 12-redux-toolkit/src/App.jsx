import React from 'react'
import LoginPage from './components/LoginPage'
import { useSelector } from 'react-redux'

function App() {
  const userData = useSelector(state => state.user)

  console.log(userData)
  return (
    <div>
      <LoginPage />

      <div>
        {
          userData ? (<p>
            {
              userData?.email
            }
          </p>): "No data is present inside the redux store."
        }
      </div>
    </div>
  )
}

export default App
