import { useEffect } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/chatSlice";
import { generate } from "../utils/helper";

const LiveChat = () => {
    const dipatch = useDispatch();
    const liveComments = useSelector(store => store.chat.comments);

    useEffect(() => {
        const timer = setInterval(() => {
            // API POlling
            dipatch(addComment({
                name: generate(),
                comment: "I am the best coder"
            }));
        }, 1500);

        return () => clearInterval(timer);
    }, [])

    return (
        <div className="bg-slate-300 w-full p-3 mx-4 shadow-lg ">
            <div>
                <h1 className="text-center text-xl font-bold">LiveChat</h1>
                <hr />
                <div className="overflow-y-scroll flex flex-col-reverse h-[660px]">
                    {liveComments.map((comment, i) => <LiveComments key={i} name={comment.name} comment={comment.comment} />)}
                </div>
            </div>
        </div>
    )
};

export default LiveChat;