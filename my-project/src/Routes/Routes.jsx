import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";

const router= createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<HomeLayout></HomeLayout>,
                loader: ()=>fetch('/news.json')
            }
        ]
    },
    {
        path:'/auth',
        element:<h1>This is auth layout page</h1>
    },
    {
        path:'/news',
        element:<h1>This is news layout page</h1>
    },
    {
        path:'*/',
        element:<h1>Page not found- 404</h1>
    }
]);

export default router;