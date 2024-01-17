import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0',name:'Kohli'},
    {id:'1',name:'Rohit'},
    {id:'2',name:'Gill'}
]

const userSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{

    }
});

export default userSlice.reducer;