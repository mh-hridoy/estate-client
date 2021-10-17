import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSection = ({ images }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={false}
      ssr={true}
      slidesToSlide={1}
      infinite={true}
      autoPlay
      autoPlaySpeed={1000}
      arrows={false}
      customTransition="all 0.5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {images && images.length !== 0 ? (
        images.map((image, inx) => {
          return (
            <div key={inx}>
              <img src={image.Location} alt={image.key} />
            </div>
          );
        })
      ) : (
        <>
          <div>
            <img src="/NoImage.jpg" alt="no image found" />
          </div>{" "}
        </>
      )}
    </Carousel>
  );
};

export default CarouselSection;
