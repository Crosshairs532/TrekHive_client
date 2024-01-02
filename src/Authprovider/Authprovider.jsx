/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const authContext = createContext(null);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const GoogleSign = new GoogleAuthProvider();

    const GoogleSignIn = () => {
        return signInWithPopup(auth, GoogleSign)
    }
    const SignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const Unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false)
                setUser(user)
            }
            else {
                setLoading(true)
            }
        })
        return () => { return Unsub() }
    }, [])
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });

    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = { GoogleSignIn, SignUp, SignIn, isLoading, user, logOut, updateUserProfile }
    return (
        <authContext.Provider value={authInfo}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default Authprovider;