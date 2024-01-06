import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Body />,
            children: [
                {
                    path: "/",
                    element: <Main />
                }
            ]
        }
    ]);

    return (
        <div>
            <Header />
            <RouterProvider router={router} />
        </div>
    )
};

export default App;
