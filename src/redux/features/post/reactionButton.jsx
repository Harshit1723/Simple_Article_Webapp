import { useDispatch } from "react-redux";
import { reactionAdded } from "../../Slices/postSlice";

const ReactionButton = ({post}) => {

    const reactionEmoji={
        thumbsUp:'👍',
        wow:'😮',
        heart:'❤️',
        rocket:'🚀',
        coffee:'☕'
    }

    const dispatch=useDispatch();

    const emojiArray = Object.entries(reactionEmoji).map( ([name,symbol]) => ({name,symbol}));
    
    return(
            <div className="mb-5  mt-6 ">
               {emojiArray.map( (emoji) => (
                <button className="ss:p-2 ss:mx-0.5 s:p-2.5 s:mx-1 sm:p-3 sm:mx-1 sm:px-4 lg:p-2 lg:px-2.3 active:bg-transparent   active:border-transparent hover:border-violet-400 " key={emoji.name} onClick={() => dispatch(reactionAdded({postId:post.id,reaction:emoji.name}))} > {emoji.symbol} {post.reactions[emoji.name]}</button>
               ))}
        </div>
    );

}

export default ReactionButton;