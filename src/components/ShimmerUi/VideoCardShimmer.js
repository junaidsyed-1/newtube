
const VideoCardShimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array(50).fill("").map((_, index) =>
                <div key={index}>
                    <div className="flex flex-col items-start p-4 space-x-4 rounded-lg shadow-md">
                        <div className="w-72 h-40 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="flex flex-row space-y-2 mt-2 ml-0">
                            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                            <div className="w-56 ml-2 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="w-64 mt-2 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>
                </div>

            )}


        </div>
    )
};

export default VideoCardShimmer;