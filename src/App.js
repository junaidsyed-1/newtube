import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import SecondaryContainer from "./components/SecondaryContainer";
import { Provider } from "react-redux";
import appStore from "./utils/store";

const App = () => {

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
        <div>
            <Provider store={appStore}>
                <Header />
                <RouterProvider router={router} />
            </Provider>
        </div>
    );
};

export default App;
