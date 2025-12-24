import { createContext } from "react";

export const AuthContext= createContext();

const AuthProviser = ({children}) => {
    
    const name='utsob'


    const authInfo={
        name
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProviser;