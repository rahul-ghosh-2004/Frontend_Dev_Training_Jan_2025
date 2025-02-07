import React from 'react'
import loginContext from '@/context/loginContext.js'

function ProfilePage() {
    const {userData} = React.useContext(loginContext)

  return (
    <div>
      {
        userData?.username !== "" ? (alert("Welcome User!")) : (alert("Please go for login!"))
      }
    </div>
  )
}

export default ProfilePage
