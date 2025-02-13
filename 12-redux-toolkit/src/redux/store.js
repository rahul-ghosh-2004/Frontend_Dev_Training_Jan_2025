import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./feature/userSlice"

const store = configureStore({
    reducer: userSlice
})

export default store