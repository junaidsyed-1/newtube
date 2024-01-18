import { useEffect, useMemo, useState } from "react";
import { YT_POPULAR_VIDEO } from "../utils/constants";

const usePopularVideos = () => {
    const [popularVideos, setPopularVideos] = useState(null);

    useEffect(() => {
        if (!popularVideos) {
            getVideos();
        }
    }, [popularVideos]);


    const getVideos = async () => {
        const data = await fetch(YT_POPULAR_VIDEO);
        const json = await data.json();
        setPopularVideos(json?.items)
    };
    return popularVideos;

};

export default usePopularVideos;