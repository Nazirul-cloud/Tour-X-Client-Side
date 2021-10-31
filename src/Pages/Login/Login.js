import React from 'react';
import { IoLogoGoogle } from "react-icons/io";
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle} className='btn btn-warning'><IoLogoGoogle color='red'/> Sign In</button>
            
        </div>
    );
};

export default Login;