import { useEffect, useState } from "react";
import Card from "./Card";
import { YT_POPULAR_VIDEO } from "../utils/constants";
import usePopularVideos from "../hooks/usePopularVideos";

const CardContainer = () => {

    const popularVideos = usePopularVideos();

    if (!popularVideos) return;

    return (
        <div className="mt-4 flex flex-wrap gap-4">
            {popularVideos.map((video) => <Card key={video.id} data={video} />)}
        </div>
    )
}

export default CardContainer;