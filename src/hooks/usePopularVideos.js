import { useEffect, } from "react";
import { YT_POPULAR_VIDEO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { getPopularVideos } from "../utils/videoSlice";

const usePopularVideos = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector(store => store.video.popularVideos);

    useEffect(() => {
        if (!popularVideos) {
            getVideos();
        }
    }, [popularVideos]);


    const getVideos = async () => {
        const data = await fetch(YT_POPULAR_VIDEO);
        const json = await data.json();
        dispatch(getPopularVideos(json?.items))
    };
    return popularVideos;

};

export default usePopularVideos;