/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';




export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user with google

    const googleProvider = new GoogleAuthProvider();

    
    //create user

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signIn user

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signIn

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // update user

    const updateUserProfile = (name, photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    // signout

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //statechange

    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('current User', currentUser);

            //get and set  token
            
            if(currentUser){
                axios.post('https://summer-school-server-five.vercel.app/jwt', {email : currentUser?.email})
                .then(data =>{
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)

                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });

        return () =>{

            return unsubscribe();

        }
       

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {
                children
            }
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;