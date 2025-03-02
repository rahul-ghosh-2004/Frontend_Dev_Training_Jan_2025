import React, { useState } from 'react'
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
import axios from 'axios'
import { LoaderCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';


function Authentication() {
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [signindata, setSigninData] = useState({
        "email": "",
        "password": ""
    })
    const [signupData, setSignupData] = useState({
        "name": "",
        "email": "",
        "password": ""
    })

    // console.log(signupData);

    const handleSigninPass = (e) => {
        setSigninData((prev) => {
            return { ...prev, password: e.target?.value }
        })
    }

    const handleSignIn = async (e) => {
        e.preventDefault()  // stop sending data to somewhere
        setLoadingStatus(true)

        try {
            // just write import.meta in the place of process
            const reqInstance = await axios.post(import.meta.env.VITE_USER_SIGNIN,
                signindata,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

            console.log(reqInstance?.data);
            toast.success(reqInstance?.data?.message)
            setLoadingStatus(false)
        } catch (error) {
            console.error(error?.response?.data)
            setLoadingStatus(false)
        }
    }

    const handleSignUp = async (e) => {
        e.preventDefault()

        setLoadingStatus(true)
        try {
            const requestInstance = await axios.post(
                import.meta.env.VITE_USER_SIGNUP,
                signupData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            toast.success(requestInstance?.data?.message)
            // console.log(requestInstance?.data);
            setLoadingStatus(false)
        } catch (error) {
            // console.error(error?.response?.data);
            toast.error(error?.response?.data?.message)
            setLoadingStatus(false)
        }
    }

    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <Toaster position="bottom-right"
                reverseOrder={false} />
            <Tabs defaultValue="signin" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="signin">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <CardDescription>
                                Enter your email & password for the signin process ...
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="email">E-Mail</Label>
                                <Input id="email" type="email" placeholder="example@gmail.com" onChange={(e) => { setSigninData((prev) => { return { ...prev, email: e.target?.value } }) }} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="RE16!@kj" onChange={handleSigninPass} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full mx-auto" onClick={handleSignIn} disabled={loadingStatus}>
                                {
                                    loadingStatus ? <LoaderCircle className='animate-spin' /> : "Sign In"
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Enter your name, email & password for completing the sign up process ...
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" placeholder="Alex Mark" onChange={(e) => { setSignupData((prev) => { return { ...prev, name: e.target?.value } }) }}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">E-Mail</Label>
                                <Input id="email" type="email" placeholder="example@gmail.com" onChange={(e) => { setSignupData((prev) => { return { ...prev, email: e.target?.value } }) }}/>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="RE16!@kj" onChange={(e) => { setSignupData((prev) => { return { ...prev, password: e.target?.value } }) }}/>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full mx-auto" onClick={handleSignUp} disabled={loadingStatus}>
                            {
                                    loadingStatus ? <LoaderCircle className='animate-spin' /> : "Sign Up"
                                }
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Authentication
