const ProductBanner = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container pb-5">
                <div className="row g-4">
                    <div className="col-lg-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
                        <div className="bg-primary rounded position-relative">
                            <a href="#">
                                <img src="/img/product-banner.jpg" className="img-fluid w-100 rounded"/>
                            </a>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
                                <a href="#">
                                    <h3 className="display-5 text-primary">EOS Rebel <br /> <span>T7i Kit</span></h3>
                                    <p className="fs-4 text-muted">$899.99</p>
                                </a>
                                <a href="#" className="btn btn-primary rounded-pill align-self-start py-2 px-4">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.2s">
                        <div className="text-center bg-primary rounded position-relative">
                            <a href="#"><img src="/img/product-banner-2.jpg" className="img-fluid w-100"/></a>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4" style={{ background: 'rgba(242, 139, 0, 0.5)' }}>
                                <a href="#">
                                    <h2 className="display-2 text-secondary">SALE</h2>
                                    <h4 className="display-5 text-white mb-4">Get UP To 50% Off</h4>
                                </a>
                                <a href="#" className="btn btn-secondary rounded-pill align-self-center py-2 px-4">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductBanner