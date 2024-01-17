import React,{useState,useEffect} from "react";

const TimeAgo = ({timeStamp}) => {
    const[timeAgo,setTimeAgo]=useState('');

    useEffect( () => {
        
        const interval = setInterval( () => {
            const now = Date.now();
            const elapsed = now- timeStamp;
            const seconds = Math.floor(elapsed/1000);

            if(seconds <60){
                setTimeAgo(`Few seconds ago`);
            }else if (seconds < 3600){
                const minutes = Math.floor(seconds/60);
                setTimeAgo(`${minutes} minutes ago`);
            }else {
                const hours = Math.floor(seconds/3600);
                setTimeAgo(`${hours} hours ago`);
            }
        },1000);

        return () => clearInterval(interval);
    },[timeStamp]);

        return(
            <div>
                { timeAgo}
            </div>
        );
}

export default TimeAgo;