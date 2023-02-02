import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '*',
        element: <div className='text-center fs-1 fw-bolder mt-3 text-danger'>This route is not found!! <br /> <br /> 404</div>
    }
])