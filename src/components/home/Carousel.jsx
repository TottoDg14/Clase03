import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "./carousel.css"

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        dragFree: false,
        slidesToScroll: 1,
    });

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const slides = [
        {
            id: 1,
            img: 'img/carousel-1.png',
            tagline: 'Save Up To A $400',
            title: 'On Selected Laptops & Desktop Or Smartphone',
            cta: 'Shop Now',
        },
        {
            id: 2,
            img: 'img/carousel-2.png',
            tagline: 'Save Up To A $200',
            title: 'On Selected Laptops & Desktop Or Smartphone',
            cta: 'Shop Now',
        },
    ];
    return (
        <div className="container-fluid carousel bg-light px-0 position-relative">
            <div className="row g-0 justify-content-end">
                {/* Carrusel principal */}
                <div className="col-12 col-lg-7 col-xl-9 position-relative">
                    <div className="header-carousel owl-carousel embla bg-light py-5" ref={emblaRef}>
                        <div className="embla__container">
                            {slides.map((slide) => (
                                <div className="embla__slide" key={slide.id}>
                                    <div className="row g-0 header-carousel-item align-items-center">
                                        <div className="col-xl-6 carousel-img">
                                            <img
                                                src={slide.img}
                                                className="img-fluid w-100"
                                                alt={`Promo ${slide.id}`}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="col-xl-6 carousel-content p-4">
                                            <h4
                                                className="text-uppercase fw-bold mb-4"
                                                style={{ letterSpacing: '3px' }}
                                            >
                                                {slide.tagline}
                                            </h4>
                                            <h1 className="display-3 text-capitalize mb-4">
                                                {slide.title}
                                            </h1>
                                            <p className="text-dark">Terms and Condition Apply</p>
                                            <a
                                                className="btn btn-primary rounded-pill py-3 px-5"
                                                href="#"
                                            >
                                                {slide.cta}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botones de navegación */}
                        <div className='position-absolute end-0 owl-nav' style={{width: 200}}>
                            <button
                                type="button"
                                className="embla__button embla__button--prev owl-prev"
                                onClick={scrollPrev}
                                aria-label="Previous slide"
                            >
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <button
                                type="button"
                                className="embla__button embla__button--next owl-next"
                                onClick={scrollNext}
                                aria-label="Next slide"
                            >
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Banner lateral fijo */}
                <div className="col-12 col-lg-5 col-xl-3">
                    <div className="carousel-header-banner h-100 position-relative">
                        <img
                            src="img/header-img.jpg"
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: 'cover' }}
                            alt="Special offer"
                        />
                        <div className="carousel-banner-offer position-absolute top-0 end-0 d-flex p-3">
                            <p className="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">
                                Save $48.00
                            </p>
                            <p className="text-primary fs-5 fw-bold mb-0">Special Offer</p>
                        </div>
                        <div className="carousel-banner position-absolute bottom-0 start-0 end-0">
                            <div className="carousel-banner-content text-center p-4" style={{ background: 'rgba(0,0,0,0.7)', borderRadius: '8px' }}>
                                <a href="#" className="d-block mb-2 text-white text-decoration-none">
                                    SmartPhone
                                </a>
                                <a href="#" className="d-block text-white fs-3 text-decoration-none">
                                    Apple iPad Mini <br /> G2356
                                </a>
                                <div className="mt-2">
                                    <del className="me-2 text-white fs-5">$1,250.00</del>
                                    <span className="text-primary fs-5">$1,050.00</span>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="btn btn-primary rounded-pill py-2 px-4 d-block mt-3 text-white text-decoration-none"
                            >
                                <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carousel