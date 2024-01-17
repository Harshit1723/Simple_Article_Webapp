import { useState } from 'react'
import PostList from './redux/features/post/postList'
import AddPost from './redux/features/post/addPost'




function App() {


  return (
    <div className='s:w-screen  flex flex-col items-center justify-center  bg-black border-2 m-2'>
    <h1 className=" text-violet-400 font-bold mt-5 ss:text-xl s:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
      Simple Article WebApp
    </h1>

    <div className="mt-5 flex flex-col items-center justify-center  ">
    <AddPost />
    <PostList />
  </div>
  
    </div>
  )
}

export default App
