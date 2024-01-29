import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { YT_LOGO } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { handleMenuToggle } from '../utils/toggleSlice';
import ContrastIcon from '@mui/icons-material/Contrast';

const Header = (props) => {
    const { theme } = props;
    const { isDarkTheme, setIsDarkTheme } = theme;

    const dispatch = useDispatch();

    const handleToggleClick = () => {
        dispatch(handleMenuToggle())
    };
    function toggleTheme() {
        setIsDarkTheme(!isDarkTheme)
    }
    const spanClass = ['mx-2 hover:bg-gray-300 p-2 hover:bg-opacity-40 hover:rounded-full cursor-pointer'];

    return (
        <div className="px-4 py-2 flex justify-between items-center">
            <div className="flex items-center">
                <span onClick={handleToggleClick} className={spanClass}><MenuIcon /></span>
                <img className="w-28 cursor-pointer" src={YT_LOGO} alt="YT-LOGO" />
            </div>
            <div className="w-1/3 flex">
                <input type="text" className="w-full rounded-full px-4 py-1 border border-black rounded-tr-none rounded-br-none text-black" />
                <span className="px-4 py-1 border border-black rounded-full rounded-tl-none rounded-bl-none border-l-0 bg-[#222222] cursor-pointer"><SearchIcon style={{ fill: '#ffffff' }} /></span>
            </div>
            <div className="flex">
                <span className={spanClass}><PhotoCameraFrontIcon /></span>
                <span className={spanClass}><NotificationsNoneIcon /></span>
                <span className={spanClass}><PersonOutlineIcon /></span>
                <span onClick={toggleTheme} className={spanClass}>< ContrastIcon /></span>
            </div>
        </div>
    )
};

export default Header;