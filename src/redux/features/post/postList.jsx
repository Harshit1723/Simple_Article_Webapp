import React from "react";
import { useSelector } from "react-redux";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./reactionButton";

const PostList = () => {

    const posts = useSelector((state) => state.posts);
    const users = useSelector( (state) => state.users);

    const sortedPosts = posts.slice().sort( (a,b) => b.timestamp - a.timestamp);

    const renderedPost = sortedPosts.map( (post) => {
        const usersa = users.find( (user) => user.id === post.userId)
        return(
            <div key={post.id} className="border-b border-dashed mt-5">
                <h3 className="ss:text-2xl s:text-2.5xl sm:text-3xl lg:text-4xl xl:text-5xl text-violet-400 max-w-96 break-words">{post.title}</h3>
                <div className=" mt-2 flex flex-col items-center">
                <p className="ss:text-sm s:text-base sm:text-lg lg:text-xl  max-w-72 break-words" >{post.content}</p>

                </div>
                <h4 className="mt-5 text-left mx-3 ss:text-sm s:text-base sm:text-lg lg:text-xl">Author: {usersa? (usersa.name) : "Unknown"}</h4>
                
                <div className="flex mx-3 mt-2 ss:text-sm s:text-base sm:text-lg lg:text-xl">
                <p>Posted : </p> <TimeAgo timeStamp={post.timestamp} />
                </div>

                <div className="mt-3">
                <ReactionButton post={post}  />
                </div>
               

            </div>
        );
    });

        return(
            <div className=" text-center mt-24 m-2 ">
                <h2 className=" mb-5 ss:text-xl s:text-2xl sm:text-3xl lg:text-5xl lg:font-bold">Recent Posts</h2>
                <div className=" container mx-auto lg:grid lg:grid-cols-3 lg:gap-4 ">
                {renderedPost}
                </div>
            </div>
        );
}

export default PostList;