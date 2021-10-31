import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'


const NotFound = () => {
    return (
        <div style={{background: 'gray', padding: '20px'}} >
            
            <h1 style={{color: 'white',  weight: '900'}}>Page Not Found !</h1>
            <img style={{ width: '65%'}}  src={notfound} alt="" />
            <br />
            <Link to ='/'> <button className='btn btn-warning'>Go Back</button> </Link>

        </div>
    );
};

export default NotFound;