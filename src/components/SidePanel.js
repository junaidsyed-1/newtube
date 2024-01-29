import { EXPLORE_SP } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SidePanel = () => {

    const handleToggle = useSelector(store => store.toggle.toggle);
    if (!handleToggle) return;

    return (
        <div className="font-semibold w-full md:w-[10%] shadow-lg px-4 h-auto">
            <ul className="">
                <Link to='/'><li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">Home</li></Link>
                <li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">Shorts</li>
                <li className="py-2 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md mb-3">Subscriptions</li>
                <hr />
                <h1 className="font-bold pt-2 px-4">Explore</h1>
                {EXPLORE_SP.map(cate => <li key={cate} className="py-3 cursor-pointer hover:bg-[#272727] px-4 hover:text-white hover:rounded-md">{cate}</li>)}
            </ul>
        </div>
    )
};

export default SidePanel;