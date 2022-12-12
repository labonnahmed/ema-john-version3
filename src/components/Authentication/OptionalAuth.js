import React from 'react';
import { Button } from 'react-bootstrap';
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from './firebase';

const OptionalAuth = () => {
    const handleOptionalAuth = (provider) =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <>
            <h5 className='ToggleLine'>- Or Sign In With -</h5>
            <div style={{textAlign:'center', margin:'25px'}}>
                <Button  variant="danger" className='OptionalAuthBtn' onClick={() => handleOptionalAuth(new GoogleAuthProvider())}>Google</Button>
                <Button  variant="warning" className='OptionalAuthBtn' onClick={() => handleOptionalAuth(new FacebookAuthProvider())}>Facebook</Button>
            </div>
        </>
    );
};

export default OptionalAuth;