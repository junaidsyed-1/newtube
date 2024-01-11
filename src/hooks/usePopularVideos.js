import { useEffect, useState } from "react";
import { YT_POPULAR_VIDEO } from "../utils/constants";

const usePopularVideos = () => {
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
    return popularVideos;

};

export default usePopularVideos;