import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

// https://i.ibb.co/zrfw3Hz/h3.jpg
// https://i.ibb.co/CvhfNZX/h2.jpg
// https://i.ibb.co/gzRfmDD/h1.jpg

const Banner = () => {
    return (
        <div>
            <Carousel className="pb-10">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/zrfw3Hz/h3.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/CvhfNZX/h2.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/gzRfmDD/h1.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;