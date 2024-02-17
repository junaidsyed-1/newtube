import { countViews } from "../utils/helper";

const Card = ({ data }) => {

    const { snippet, statistics } = data;
    const { thumbnails, title, channelTitle } = snippet;

    return (
        <div className="w-72">
            <img src={thumbnails.medium.url} alt="title" className="w-72 rounded-md object-cover" />
            <h1 className="font-semibold mt-2">{title.length >= 51 ? title.slice(0, 51) + '...' : title}</h1>
            <p className="text-sm">{channelTitle.length >= 20 ? channelTitle.slice(0, 10) + '...' : channelTitle} <span className="text-sm ml-4"> {countViews(statistics.viewCount)} Views</span></p>
        </div >
    )
};

export default Card;