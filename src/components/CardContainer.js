import { useEffect, useState } from "react";
import Card from "./Card";
import { YT_POPULAR_VIDEO } from "../utils/constants";

const CardContainer = () => {
    const [popularVideos, setPopularVideos] = useState(null);


    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YT_POPULAR_VIDEO);
        const json = await data.json();
        // console.log(json.items[0])
        setPopularVideos(json?.items)
    };

    if (!popularVideos) return;

    return (
        <div className="mt-4 flex flex-wrap gap-4">
            {popularVideos.map((video) => <Card key={video.id} data={video} />)}
        </div>
    )
}

export default CardContainer;