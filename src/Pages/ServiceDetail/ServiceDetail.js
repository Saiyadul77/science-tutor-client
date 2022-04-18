import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div className='text-center'>
            <h1>This is service detail:{serviceId}</h1>
            <h2>Common Features:</h2>
            <p>Physical or online class</p>
            <p>One to one or grouping class</p>
            <p>Special care for weak student</p>
            <p>Always give motivation speech</p>

            <div>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;