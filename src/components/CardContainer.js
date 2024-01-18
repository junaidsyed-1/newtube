import Card from "./Card";
import usePopularVideos from "../hooks/usePopularVideos";
import { Link } from "react-router-dom";

const CardContainer = () => {

    const popularVideos = usePopularVideos();

    if (!popularVideos) return;

    return (
        <div className="mt-4 flex flex-wrap gap-4">
            {popularVideos.map((video) => <Link to='watch' key={video.id}> <Card data={video} /> </Link>)}
        </div>
    )
}

export default CardContainer;