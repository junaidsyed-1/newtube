import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import { YOUTUBE_SEARCH_API, YT_LOGO } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { handleMenuToggle } from '../utils/toggleSlice';
import ContrastIcon from '@mui/icons-material/Contrast';
import { useEffect, useState } from 'react';
import { addCachedResult, addSearchResult } from '../utils/searchSlice';
import { addToggleTheme } from '../utils/themeSlice';

const Header = () => {
    const dispatch = useDispatch();
    const [isSearchOn, setIsSearchOn] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const searchResult = useSelector(store => store.search.searchResult);
    const cahcedRes = useSelector(store => store.search.cachedRes);

    // Theme Slice
    const isDarkTheme = useSelector(store => store.theme.darkTheme);

    const handleToggleClick = () => {
        dispatch(handleMenuToggle());
    };

    function toggleTheme() {
        dispatch(addToggleTheme())
    };

    const handleThemeClass = isDarkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black";

    const getSearchRes = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        dispatch(addSearchResult(json[1]));
        dispatch(addCachedResult({ query: searchQuery, result: json[1] }));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cahcedRes[searchQuery]) {
                dispatch(addCachedResult(cahcedRes[searchQuery]));
            } else {
                getSearchRes();
            }
        }, 200);

        return () => clearTimeout(timer)
    }, [searchQuery, cahcedRes])

    const spanClass = ['mx-2 hover:bg-gray-300 p-2 hover:bg-opacity-40 hover:rounded-full cursor-pointer'];

    return (
        <header className={`sticky top-0 z-10 ${handleThemeClass} px-4 py-2 flex justify-between items-center `}>
            <div className="flex items-center">
                <span onClick={handleToggleClick} className={spanClass}><MenuIcon /></span>
                <img className="w-28 cursor-pointer hidden md:flex" src={YT_LOGO} alt="YT-LOGO" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 flex">
                <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => setIsSearchOn(false)}
                    onFocus={() => setIsSearchOn(!isSearchOn)}
                    type="text"
                    className="w-full sm:w-full rounded-full px-4 py-1 border border-black rounded-tr-none rounded-br-none text-black" />
                <span className="px-4 py-1 border border-black rounded-full rounded-tl-none rounded-bl-none border-l-0 bg-[#222222] cursor-pointer"><SearchIcon style={{ fill: '#ffffff' }} /></span>

                {isSearchOn && <div className={`${isDarkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black"} absolute mt-[10%] w-[50%] md:mt-[9%] md:w-[30%] lg:w-[30%] lg:mt-[3%] rounded-lg`}>
                    <ul className="my-4">
                        {searchResult.map((search) => <li key={search} className='p-2 my-1 hover:bg-[#272727] hover:text-white cursor-pointer font-bold'>{search}</li>)}

                    </ul>
                </div>}
            </div>
            <div className="flex">
                <span className={`${spanClass} hidden md:flex `}><PhotoCameraFrontIcon /></span>
                <span className={`${spanClass} hidden md:flex `}><NotificationsNoneIcon /></span>
                <span className={`${spanClass} hidden md:flex `}><PersonOutlineIcon /></span>
                <span onClick={toggleTheme} className={spanClass}>< ContrastIcon /></span>
            </div>
        </header>
    )
};

export default Header;