
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
         <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;