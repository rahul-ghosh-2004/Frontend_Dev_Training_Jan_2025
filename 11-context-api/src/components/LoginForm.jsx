import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import loginContext from "../context/loginContext.js"

function LoginForm() {
    const [data, setData] = React.useState({
        username: "",
        password: ""
    })

    const { setUserData } = React.useContext(loginContext)

    const handleUsername = (e) => {
        setData((prev) => {
            return {
                ...prev, username: e.target?.value
            }
        })
    }

    const handlePassword = (e) => {
        setData((prev) => {
            return {
                ...prev, password: e.target?.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setUserData(data)
    }

    console.log(data)

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter user namet" onChange={handleUsername}/>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="*********" onChange={handlePassword}/>
                </div>
                
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-full mx-auto" onClick={handleSubmit}>Login</Button>
          </CardFooter>
        </Card>
        </div>
      )
}

export default LoginForm
