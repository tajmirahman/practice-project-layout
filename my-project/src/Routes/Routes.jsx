import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Pages/NewsDetails";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivateRoute from "../Provider/PrivateRoute";
import Loadin from "../Components/Loadin";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loadin></Loadin>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loadin></Loadin>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',  
        element:(
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loadin></Loadin>
    },
    {
        path: '*',
        element: <h1>Page not found- 404</h1>
    }
]);

export default router;