import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

function Todo({ todoText, _id, deleteTodo, updateTodo }) {
    const [ newText, setNewText ] = useState("")
    console.log(newText);
    // console.log(_id);
    return (
        <div
            className='h-36 bg-slate-200 rounded-xl flex items-center justify-center flex-col gap-y-5'
        >

            <div>
                {/* Displaying the todo text */}
                <p className='h-16 w-64 rounded-xl text-center'>
                    {
                        todoText
                    }
                </p>
            </div>

            <div className='flex gap-x-3'>
                {/* Buttons for deleting and updating */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Update</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit the Todo</DialogTitle>
                            <DialogDescription>
                                Enter a new todo text to update the existing todo ...
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    New Text
                                </Label>
                                <Input id="name" placeholder="Enter a new todo text ..." className="col-span-3" onChange={(event) => { setNewText(event?.target?.value) }}/>
                            </div>
                        
                        </div>
                        <DialogFooter>
                            <Button type="submit" onCLick={() => {updateTodo(_id, newText)}}>Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                {/* <Button className="bg-green-500 hover:bg-green-700">Update</Button> */}
                <Button className="bg-red-500 hover:bg-red-700" onClick={() => { deleteTodo(_id) }}>Delete</Button>
            </div>
        </div>
    )
}

export default Todo