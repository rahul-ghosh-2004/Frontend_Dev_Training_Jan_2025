import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: {
        data: []
    }
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.data = action.payload
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer