import { useDispatch } from "react-redux";
import { closeMenuToggle } from "../utils/toggleSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import { useEffect } from "react";

const WatchVideo = () => {

    const [params] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenuToggle());
    }, [])


    return (
        <div className="flex">
            <div>
                <iframe
                    width="1280"
                    height="720"
                    src={"https://www.youtube.com/embed/" + params.get('v')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
            <LiveChat />
        </div>
    )
}

export default WatchVideo;