import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import SecondaryContainer from "./components/SecondaryContainer";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import { useState } from "react";

const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

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
        <div className={isDarkTheme ? "bg-[#0F0F0F] text-white" : "bg-white text-black"}>
            <Provider store={appStore}>
                <Header theme={{ isDarkTheme, setIsDarkTheme }} />
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
};

export default App;
