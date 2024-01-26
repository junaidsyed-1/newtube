import { BUTTON_CAT } from "../utils/constants";

const ButtonLists = () => {

    return (
        <div>

            {BUTTON_CAT.map((butt) => <button key={butt} className="bg-[#272727] text-white rounded-md px-3 py-1 mx-1">{butt}</button>)}
        </div>
    )
};

export default ButtonLists;