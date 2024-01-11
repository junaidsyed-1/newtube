
const Card = ({ data }) => {

    const { snippet } = data;
    const { thumbnails, title, channelTitle } = snippet;

    return (
        <div className="w-72">
            <img src={thumbnails.medium.url} alt="title" className="w-72 rounded-md object-cover" />
            <h1 className="font-bold">{title.length >= 51 ? title.slice(0, 51) + '...' : title}</h1>
            <p className="text-sm">{channelTitle} <span className="text-sm ml-4">5.6m Views</span></p>
        </div >
    )
};

export default Card;