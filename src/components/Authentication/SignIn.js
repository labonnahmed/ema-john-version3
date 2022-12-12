import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Authetication.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

const SignIn = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const isFeildValid = (e) => {
        let feildValid;
        const regularExpressionForEmail =/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/; 
        const regularExpressionForPassword  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if(e.target.name === 'email'){
            feildValid = regularExpressionForEmail.test(e.target.value);
            console.log(feildValid)
        }
        if(e.target.name === 'password'){
            feildValid = regularExpressionForPassword.test(e.target.value);
            console.log(feildValid)
        }

        if(feildValid){
            if(e.target.name === 'email'){
                setEmail(e.target.value)
            }
            if(e.target.name === 'password'){
                setPassword(e.target.value)
            }
        };
    };

    const handleSignIn = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user)
            alert('user sign in successfull')
          })
          .catch((error) => {
            alert(error)
          });

        e.preventDefault();
    }

    return (
        <div onSubmit={handleSignIn}>
            <h3 style={{textAlign:'center', lineHeight:'15px'}}>Login to your Account</h3>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onBlur={isFeildValid} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" onBlur={isFeildValid} required/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button variant="warning" type="submit">
                Submit
            </Button>
        </div>
    );
};

export default SignIn;