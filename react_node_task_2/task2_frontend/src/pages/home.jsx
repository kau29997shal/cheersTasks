import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homePage page'>
            <div className="container">
                <h1>Welcome to Movies App</h1>
            </div>
            
            <div className='linkDiv'>
                <Link className="link" to="/movies">Click here to Check movies</Link>
            </div>
        </div>
    )
};

