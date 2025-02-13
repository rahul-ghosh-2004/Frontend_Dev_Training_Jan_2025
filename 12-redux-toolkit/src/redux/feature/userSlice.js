import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        "email": "",
        "password": ""
    }
}

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.user = action.payload
        },
        unsetData: (state) => {
            state.user = {
                email: "",
                password: ""
            }
        }
    }
})

export const { setData, unsetData } = userSlice.actions

export default userSlice.reducer