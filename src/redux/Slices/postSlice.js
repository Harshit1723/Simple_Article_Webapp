import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0,title:"Computer Science" ,content:"Study of Technology",timestamp:Date.now() - 100000,reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }},
    {id:1,title:"Data Structure and Algorithms" ,content:"Study of Computer Algorithms" ,timestamp:Date.now() - 600000 ,reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0
    }},];

const postSlice = createSlice({
    name:'Post',
    initialState,
    reducers:{
        addPost:(state,action) => {
            const timestamp = Date.now();
           const reactions={
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
            state.push({...action.payload,timestamp,reactions});
           
        },
        reactionAdded: (state,action) => {
            const {postId,reaction}=action.payload;
            const existingPost = state.find(  (post) => post.id === postId);

            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
});
export const {addPost,reactionAdded}=postSlice.actions;
export default postSlice.reducer;