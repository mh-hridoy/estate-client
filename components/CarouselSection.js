import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/propertyOverview.module.css'

const CarouselSection = () => {
    return (
        <Carousel autoPlay={true} stopOnHover={true} infiniteLoop={true} className={styles.carousel} >
            <div>
                <img className={styles.carouselImage} src="/front.JPEG" alt="image" />
            </div>
            <div>
                <img className={styles.carouselImage} src="/front2.JPEG" alt="image" />
            </div>
            <div>
                <img className={styles.carouselImage} src="/backfront.JPEG" alt="image" />
            </div>
        </Carousel>
    )
}

export default CarouselSection
