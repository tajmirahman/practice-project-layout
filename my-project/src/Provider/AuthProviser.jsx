import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext();

const AuthProviser = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        () => {
            return unsubscribe();
        }

    }, [])

    console.log(user)


    const authInfo = {
        createUser,
        user,
        setUser,
        logOut
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProviser;