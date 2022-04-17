import React from 'react';
import { Carousel } from 'react-bootstrap';
import science1 from '../../../images/banner/Math.jpg';
import science2 from '../../../images/banner/physics.png';
import science3 from '../../../images/banner/chemistry.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 fluid"
                        src={science1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <br />
                        <h3 className='text-success'>Mathematics</h3>
                        <p className='text-dark fw-bold'>Pure mathematics is the world's best game.....</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 fluid"
                        src={science2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-white'>Physics Instruments</h3>
                        <p className='text-primary fw-bold'>“Energy is liberated matter, matter is energy waiting to happen.” ... </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 fluid"
                        src={science3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-success'>Chemistry Instruments and Chemical</h3>
                        <p className='text-white fw-bold'>"Every man who receives a liberal education now counts chemistry among the most indispensable objects of his studies."    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;