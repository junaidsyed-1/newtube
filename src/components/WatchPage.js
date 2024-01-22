import WatchVideo from "./WatchVideo";
import CommentsContainer from "./CommentsContainer";
import VideoSuggestionContainer from "./VideoSuggestionContainer";

const WatchPage = () => {

    return (
        <div className="px-10 w-full">
            <WatchVideo />
            <div className="flex">
                <div className="w-full">
                    <CommentsContainer />
                </div>
                <div className="px-10 w-[42%]">
                    <VideoSuggestionContainer />
                </div>
            </div>
        </div>
    )
};

export default WatchPage;