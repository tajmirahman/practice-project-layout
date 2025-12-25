import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProviser = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        () => {
            return unsubscribe();
        }

    }, [])

    console.log(user,loading)

    console.log(user)


    const authInfo = {
        createUser,
        user,
        setUser,
        logOut,
        userLogin
    }


    return (
        <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProviser;