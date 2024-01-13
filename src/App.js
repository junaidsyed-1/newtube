import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import ToggleContext from "./utils/ToggleContext";
import { useState } from "react";
import WatchPage from "./components/WatchPage";
import SecondaryContainer from "./components/SecondaryContainer";

const App = () => {
    const [toggle, setToggle] = useState(true);
    const handleToggleClick = () => {
        setToggle(!toggle);
    };

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
        <ToggleContext.Provider value={{ toggle, handleToggleClick }}>
            <div>
                <Header />
                <RouterProvider router={router} />
            </div>
        </ToggleContext.Provider>
    );
};

export default App;
