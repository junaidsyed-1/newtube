import { useSelector } from "react-redux";
import SuggestionCard from "./SuggestionCard";
import usePopularVideos from "../hooks/usePopularVideos";
import { Link } from "@mui/material";

const VideoSuggestionContainer = () => {
    usePopularVideos();
    const popularVideos = useSelector(store => store.video.popularVideos)
    if (!popularVideos) return;


    return (
        <div className="cursor-pointer ">
            {popularVideos.filter((video, index) => index < 10).map(v => <SuggestionCard key={v.id} videos={v} />)}
            {/* {popularVideos.map((video) => <SuggestionCard key={video.id} videos={video} />)} */}
        </div>
    )
}

export default VideoSuggestionContainer;