import{
    getAuth, signInWithEmailAndPassword,
} from 'firebase/auth';

import {app} from '../config/firebase';

export const FirebaseAuth = getAuth(app);

export const Authentication = () => {
    return FirebaseAuth;
}

export const SignIn = async(email, password) => {
    await signInWithEmailAndPassword(FirebaseAuth, email, password)
}
