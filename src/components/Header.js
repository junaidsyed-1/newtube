import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { YT_LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { handleMenuToggle } from '../utils/toggleSlice';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useState } from 'react';

const Header = (props) => {
    const { theme } = props;
    const { isDarkTheme, setIsDarkTheme } = theme;
    const [isSearchOn, setIsSearchOn] = useState(false);

    const dispatch = useDispatch();

    const handleToggleClick = () => {
        dispatch(handleMenuToggle());
    };

    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme);
    };



    const spanClass = ['mx-2 hover:bg-gray-300 p-2 hover:bg-opacity-40 hover:rounded-full cursor-pointer'];

    return (
        <header className={`sticky top-0 z-10 ${isDarkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black"} px-4 py-2 flex justify-between items-center `}>
            <div className="flex items-center">
                <span onClick={handleToggleClick} className={spanClass}><MenuIcon /></span>
                <img className="w-28 cursor-pointer" src={YT_LOGO} alt="YT-LOGO" />
            </div>
            <div className="w-1/3 flex">
                <input
                    onBlur={() => setIsSearchOn(false)}
                    onFocus={() => setIsSearchOn(!isSearchOn)}
                    type="text"
                    className="w-full rounded-full px-4 py-1 border border-black rounded-tr-none rounded-br-none text-black" />
                <span className="px-4 py-1 border border-black rounded-full rounded-tl-none rounded-bl-none border-l-0 bg-[#222222] cursor-pointer"><SearchIcon style={{ fill: '#ffffff' }} /></span>
                {isSearchOn && <div className={`${isDarkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black"} absolute sm:w-[30%] sm:mt-[2%] rounded-lg`}>
                    <ul className="my-4">
                        <li className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer rounded-lg font-bold'>Suggestion for vide</li>
                        <li className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer rounded-lg font-bold'>Suggestion for vide</li>
                        <li className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer rounded-lg font-bold'>Suggestion for vide</li>
                        <li className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer rounded-lg font-bold'>Suggestion for vide</li>
                        <li className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer rounded-lg font-bold'>Suggestion for vide</li>

                    </ul>
                </div>}
            </div>
            <div className="flex">
                <span className={spanClass}><PhotoCameraFrontIcon /></span>
                <span className={spanClass}><NotificationsNoneIcon /></span>
                <span className={spanClass}><PersonOutlineIcon /></span>
                <span onClick={toggleTheme} className={spanClass}>< ContrastIcon /></span>
            </div>
        </header>
    )
};

export default Header;