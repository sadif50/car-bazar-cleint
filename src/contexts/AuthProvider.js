import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // Create User With Email & Password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // LogIn With Email & Password
    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign In With PopUp With Google
    const googleProviderLogIn = provider => {
        return signInWithPopup(auth, provider)
    }

    // Log Out User
    const logOut = () => {
        return signOut(auth)
    }

    // Update User Display Name and Photo URL
    const updateInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    // Get Currently Signed In User Info
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    return(
        <AuthContext.Provider value={{user, createUserWithEmail, logInWithEmail, googleProviderLogIn, logOut, updateInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;