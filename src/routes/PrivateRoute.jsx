import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;


/**
 *________STEPS_______
 *
 * 1. Check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect the user to the login page
 * 
 * 
 * **/