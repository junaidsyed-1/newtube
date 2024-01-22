import { useSelector } from "react-redux";
import SuggestionCard from "./SuggestionCard";
import usePopularVideos from "../hooks/usePopularVideos";

const VideoSuggestionContainer = () => {
    usePopularVideos();
    const popularVideos = useSelector(store => store.video.popularVideos)
    if (!popularVideos) return;


    return (
        <div>
            {popularVideos.map((video) => <SuggestionCard key={video.id} videos={video} />)}
        </div>
    )
}

export default VideoSuggestionContainer;