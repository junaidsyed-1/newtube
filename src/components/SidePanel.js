import { useContext } from "react";
import ToggleContext from "../utils/ToggleContext";

const SidePanel = () => {

    const { toggle } = useContext(ToggleContext);

    const explore = ["Trending", "Music", "Films", "Live", "Gaming", "News", "Podcast", "Sports", "Learning"]

    if (!toggle) return null;

    return (
        <div className="font-semibold w-full md:w-[10%] shadow-lg px-4">
            <ul className="">
                <li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">Home</li>
                <li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">Shorts</li>
                <li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">Subscriptions</li>
                <hr />
                <h1 className="font-bold pt-2 px-4">Explore</h1>
                {explore.map(cate => <li key={cate} className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">{cate}</li>)}
            </ul>
        </div>
    )
};

export default SidePanel;