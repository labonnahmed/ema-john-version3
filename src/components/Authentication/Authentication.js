import React, { useState } from 'react';
import {Container, Form} from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './Authetication.css'
import OptionalAuth from './OptionalAuth';
import AuthDetails from './AuthDetails';

const Authentication = () => {
    const[newUser, setNewUser]= useState(false);

    return (
        <Container className='auth-container'>
            <AuthDetails />
            <Form className='loginForm'>
                {newUser ? <SignUp /> : <SignIn />}
                <OptionalAuth />
                <p className='ToggleLine'>
                    <small >{ newUser ? "already have any account?" : "don't have any account?"  } 
                        <span 
                            style={{color:'rgb(252, 143, 0)', cursor:'pointer'}}
                            onClick={() => setNewUser(!newUser)} 
                            >{ newUser ? " Login here" : " Register here"}
                        </span>
                    </small>
                </p>
            </Form> 
        </Container>
    );
};

export default Authentication;