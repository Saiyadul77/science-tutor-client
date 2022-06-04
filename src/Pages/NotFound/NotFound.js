import React from 'react';
import sleeping from '../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-primary text-center'>This site is not available.</h1>
            <img className='w-50' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;