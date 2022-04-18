import React from 'react';
import ownPic from '../../images/own.jpg'

const About = () => {
    return (
        <div className='container w-50'>
            <h1 className='mt-3'>Name: Md. Saiyadul Amin Akhand</h1>
            <img className='d-block mx-auto' src={ownPic} alt="" />
            <p className='mt-3'><b>My Goal:</b> I have completed my graduation in Bsc in CSE in 2014 and MBA in 2019. Unfortunately I have missed my track. Now I'm teacher. But I have always tried to change my carrier. Now I want to be a Web Developer by heart and soul. For this reason I have started my course. I am trying to finish my class time to time. Insha-Allah, I hope achieve my goal. </p>
        </div>
    );
};

export default About;