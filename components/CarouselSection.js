import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => {
    return (
        <Carousel showStatus={false} showArrows={false} autoPlay={true} stopOnHover={true} showThumbs={false} infiniteLoop={true} className="carousel" showIndicators={false}>
            <div>
                <img className="carouselImage" src="/front.JPEG" alt="image" />
            </div>
            <div>
                <img className="carouselImage" src="/front2.JPEG" alt="image" />
            </div>
            <div>
                <img className="carouselImage" src="/backfront.JPEG" alt="image" />
            </div>
        </Carousel>
    )
}

export default CarouselSection
