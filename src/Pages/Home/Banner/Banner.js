import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slider-01.jpg';
import banner2 from '../../../images/slider-02.jpg';
import banner3 from '../../../images/slider-03.jpg';
import banner4 from '../../../images/slider-04.jpg';
import './Banner.css';
const Banner = () => {

    return (
        <>
            <Carousel>
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Tour Bangladesh</h3>
                        <p>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Welcome to Tour Bangladesh</h3>
                        <p>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Welcome to Tour Bangladesh</h3>
                        <p>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                    <h3>Welcome to Tour Bangladesh</h3>
                        <p>Bangladesh is one of the few countries in South Asia, which remains to be explored. Bangladesh has a delicate and distinctive attraction of its own to offer and it is definitely not a tourist haunt like Nepal or India. Bangladesh is like a painter's dream come true with a rich tapestry of colors and texture. The traditional emphasis of the tourist trade has always been on the material facilities offered by a country rather than on its actual charms. This may be a reason why Bangladesh has seldom been highlighted in the World's tourist maps</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;