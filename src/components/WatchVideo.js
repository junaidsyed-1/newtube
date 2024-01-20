import { useDispatch } from "react-redux";
import { closeMenuToggle } from "../utils/toggleSlice";
import { useSearchParams } from "react-router-dom";

const WatchVideo = () => {

    const [params] = useSearchParams();

    const dispatch = useDispatch();
    dispatch(closeMenuToggle());


    return (
        <div>
            <iframe
                width="1280"
                height="720"
                src={"https://www.youtube.com/embed/" + params.get('v')}
                title="Cure Depression &amp; Anxiety | Surah Mulk 10x | Lofi Theme Quran | Quran For Sleep/Study Sessions"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default WatchVideo;