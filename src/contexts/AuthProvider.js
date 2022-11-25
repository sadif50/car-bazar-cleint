import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
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

    return(
        <AuthContext.Provider value={{user, createUserWithEmail, logInWithEmail, logOut, updateInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;