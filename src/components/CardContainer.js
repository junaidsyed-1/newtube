import Card from "./Card";
import usePopularVideos from "../hooks/usePopularVideos";
import { Link } from "react-router-dom";
import VideoCardShimmer from "./ShimmerUi/videoCardShimmer";

const CardContainer = () => {

    const popularVideos = usePopularVideos();

    if (!popularVideos) return <VideoCardShimmer />;

    return (
        <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-5">
            {popularVideos.map((video) => <Link to={'/watch?v=' + video.id} key={video.id}> <Card data={video} /> </Link>)}
        </div>
    )
}

export default CardContainer;