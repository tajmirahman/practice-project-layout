import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location=useLocation();
    console.log(location);

    return <Navigate to={'/auth/login'}></Navigate>
};

export default PrivateRoute;