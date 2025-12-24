import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Pages/NewsDetails";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth-loign',
                element: <Login></Login>
            },
            {
                path: '/auth-register',
                element: <Register></Register>
            }

        ]
    },
    {
        path: '/news-details/:id',
        element: <NewsDetails></NewsDetails>,
        loader: () => fetch('/news.json')
    },
    {
        path: '*/',
        element: <h1>Page not found- 404</h1>
    }
]);

export default router;