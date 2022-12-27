import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser ]= useState();
    const [loading, setLoading] = useState(true);

    //  Creating user with email and password
        const createUser = (email, password)=> {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
        }
        // User LogIn with Email and Password
        const userLogIn = (email, password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }
        // Log in with Google
        const GoogleLogin = (provider) => {
            setLoading(true);
            return signInWithPopup(auth, provider);
        }

   

    //  Update user profile 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
        //  User LogOut Implement
        const logout = () => {
            setLoading(true);
            return signOut(auth);
        }

        useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false)
            })
            return () => unsubscribe();
        },[])

    const authInfo = {user, createUser, userLogIn, logout, GoogleLogin,  updateUserProfile, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;