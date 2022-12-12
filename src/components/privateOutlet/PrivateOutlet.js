import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { emaJohnContext } from '../../App';

const PrivateOutlet = () => {
    const[authUser] = useContext(emaJohnContext);

    return (
        <>
            { authUser ? <Outlet /> : <Navigate to='/login' /> }
        </>
    );
};

export default PrivateOutlet;