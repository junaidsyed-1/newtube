import { useDispatch, useSelector } from "react-redux"
import WatchVideo from "./WatchVideo"
import { closeMenuToggle } from "../utils/toggleSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    dispatch(closeMenuToggle());

    return (
        <div>
            <WatchVideo />
        </div>
    )
}

export default WatchPage