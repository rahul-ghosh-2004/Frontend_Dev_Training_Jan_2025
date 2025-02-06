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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import React from "react"

function DemoTabs() {
    const [ data, setData ] = React.useState({
        "email": "",
        "password": ""
    })

    const email = "example@cxi.in"
    const password = 123456

    const handleLogin = () => {
        if (data.email !== email) {
            return alert("Invalid E-Mail")
        }

        if (Number(data.password) !== Number(password)) {
            return alert("Invalid Password")
        }

        return alert("Welcome User!")
    }

    const handleEmailInput = (e) => {
        setData((yusera) => {
            return {
                ...yusera, "email": e.target.value
            }
        })
    }

    const handlePasswordInput = (e) => {
        setData((prev) => {
            return {
                ...prev, "password": e.target.value
            }
        })
    }

    console.log(data)

    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                <TabsTrigger value="signin">Sign In</TabsTrigger>
            </TabsList>
            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                        <CardDescription>
                            Put your name, email & mobile for completing the sign up process!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" type="text" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">E-Mail</Label>
                            <Input id="email" type="email" defaultValue="example@gmail.com" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" defaultValue="9854782140" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full mx-auto">Sign Up</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="signin">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign In</CardTitle>
                        <CardDescription>
                            Please enter your email & password for sign in!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">E-Mail</Label>
                            <Input id="email" type="email" defaultValue="example@gmail.com" onChange={handleEmailInput}/>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" defaultValue="1234" onChange={handlePasswordInput}/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="mx-auto w-full" onClick={handleLogin}>Sign In</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default DemoTabs
