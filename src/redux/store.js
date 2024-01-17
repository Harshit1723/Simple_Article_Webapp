import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./Slices/postSlice";
import userSlice from "./Slices/userSlice";

export const store = configureStore({
    reducer:{
        posts:postSlice,
        users:userSlice,
    }
});