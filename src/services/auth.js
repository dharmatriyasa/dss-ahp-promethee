import{
    getAuth, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import {app} from '../config/firebase';

export const FirebaseAuth = getAuth(app);

export const Authentication = () => {
    return FirebaseAuth;
}

export const SignIn = async(email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}

export const onUserChanged = async(callback) => {
    return onAuthStateChanged(FirebaseAuth, callback);
}

export const Logout = () => {
    return signOut(FirebaseAuth);
}

export const currentUser = FirebaseAuth.currentUser;