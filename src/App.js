import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import SecondaryContainer from "./components/SecondaryContainer";
import { useSelector } from "react-redux";

const App = () => {

    const darkTheme = useSelector(store => store.theme.darkTheme);
    const handleThemeClass = darkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black";


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    path: "/",
                    element: <SecondaryContainer />
                },
                {
                    path: "/watch",
                    element: <WatchPage />
                }
            ]
        }
    ]);

    return (
        <div className={handleThemeClass}>
            <Header />
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
