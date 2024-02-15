
const VideoCardShimmer = () => {
    return (
        // <div>
        //     <div className="w-72 mt-4 bg-[#272727] rounded-lg h-40"></div>
        //     <div className="flex items-center w-72">
        //         <div className="w-7 h-7 rounded-full bg-[#272727]"></div>
        //         <div className="bg-[#272727] rounded-lg h-5"></div> <br />
        //         <div className="bg-[#272727] rounded-lg h-5"></div>
        //     </div>
        // </div>
        <div className="flex flex-col items-start p-4 space-x-4 rounded-lg shadow-md">
            <div className="w-72 h-40 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="flex flex-row space-y-2 mt-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-56 ml-2 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
            <div className="w-64 mt-2 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

    )
};

export default VideoCardShimmer;