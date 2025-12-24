import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=> fetch('/news.json')
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>This is auth layout page</h1>
    },
    {
        path: '/news-details',
        element:<NewsDetails></NewsDetails>,
        loader: ()=>fetch('/news.json')
    },
    {
        path: '*/',
        element: <h1>Page not found- 404</h1>
    }
]);

export default router;