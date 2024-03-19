/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import AxiosPublic from '../Axios/AxiosPublic';
import { CiGlass } from "react-icons/ci";

export const authContext = createContext(null);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const axiosPublic = AxiosPublic();
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
        const Unsub = onAuthStateChanged(auth, async (user) => {
            setUser(user)

            if (user) {
                const userEmail = { email: user?.email };
                const res = await axiosPublic.post('/jwt', userEmail);
                localStorage.setItem('token', res.data.token)
                setLoading(false)

            }
            else {
                localStorage.removeItem('token')
                // setLoading(true)
            }
        })
        return () => {
            Unsub()
        }
    }, [axiosPublic])
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