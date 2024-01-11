import SidePanel from "./SidePanel";
import SecondaryContainer from "./SecondaryContainer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="py-4 flex">
            <SidePanel />
            <Outlet />
        </div>
    )
}

export default Main;