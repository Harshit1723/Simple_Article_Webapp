import React,{useState} from "react";
import { addPost } from "../../Slices/postSlice";
import { useDispatch,useSelector } from "react-redux";

const AddPost = () => {
    const dispatch = useDispatch();

    const[title,setTitle]=useState('');
    const[content,setContent]=useState('');
    const[userId,setUserId]=useState('');

    const posts= useSelector( (state) => state.posts);
    const users=useSelector( (state) => state.users);

    
    
    const handleAdd = () => {
        if(!title || !content){
            alert('Please Enter Valid Details');
        }
        dispatch(addPost({id:posts.length,title,content,userId}));
        setTitle('');
        setContent('');
        setUserId('');
    }

    return (

        <div className=" flex flex-col items-center justify-center">
           
            <select className="mt-2 border outline-none p-0.5  lg:px-5 rounded bg-black lg:p-1 lg:text-xl " value={userId} onChange={(e) => setUserId(e.target.value)}>
                <option value="" disabled>Select Author</option>
                {users.map( (user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <br/>

            <label className="mx-2 lg:text-2xl ">
                <input className="text-white p-1 text-center bg-black border-b  outline-none focus:border focus:border-violet-400 lg:p-2    " placeholder="Enter a Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <br/>
            <label className="lg:text-xl">
                <textarea className="resize-none text-center p-1 text-white bg-black border-b outline-none focus:border focus:border-violet-400 lg:px-6 lg:p-3" placeholder="Enter Content" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </label>
            
            <br />
            <button className="bg-blue-500 lg:px-8 lg:text-xl" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddPost;