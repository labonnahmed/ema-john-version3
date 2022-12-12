import React, { useContext, useEffect} from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from './firebase'
import { emaJohnContext } from '../../App';

const AuthDetails = () => {
    const[authUser, setAuthUser] = useContext(emaJohnContext);

    useEffect(()=> {
        const listen= onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthUser(user);
            } else {
              setAuthUser(null);
            }
          });
          return () => {
            listen();
          }
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            alert('Sign-out successful')
          }).catch((error) => {
            alert(error)
          });
    };

    return (
        <>
            {
                authUser? <h5>Welcome, {authUser.email} <button onClick={handleSignOut}>Sign Out</button></h5> : <></>
            }
        </>
    );
};

export default AuthDetails;