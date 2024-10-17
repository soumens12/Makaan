import React from 'react';
import HeaderCarousel from '../component/HeaderCarousel';
import Search from '../component/Search';
import PropertList from '../component/PropertList';
import PropertyType from '../component/PropertyType';
import PropertyAgent from '../component/PropertyAgent';

function Home() {
  return (
    <div>
        
        <div className="container-xxl bg-white p-0">
      
             {/* <!-- Header Start --> */}
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                    <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                        sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                    <a href="/" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                </div>
                <div className="col-md-6 animated fadeIn">
                <HeaderCarousel></HeaderCarousel>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}

        {/* <!-- Search Start --> */}
        <Search/>
        {/* <!-- Search End --> */}

        {/* <!-- Category Start --> */}
        <PropertyType></PropertyType>
        {/* <!-- Category End --> */}


        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="assets/img/about.jpg" alt='about' />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="/">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Property List Start --> */}
        <PropertList></PropertList>
        {/* <!-- Property List End --> */}


        {/* <!-- Call to Action Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="assets/img/call-to-action.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                </div>
                                <a href="/" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="/" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Call to Action End --> */}


        {/* <!-- Team Start --> */}
        <PropertyAgent></PropertyAgent>
        {/* <!-- Team End --> */}


        {/* <!-- Testimonial Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/assets/img/testimonial-1.jpg" alt='testimonial' style={{width: "45px", height: "45px"}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/assets/img/testimonial-2.jpg" alt='testimonial' style={{width: "45px", height: "45px"}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="assets/assets/img/testimonial-3.jpg" alt='testimonial' style={{width: "45px", height: "45px"}} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Testimonial End --> */}
        


        {/* <!-- Back to Top --> */}
        <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
  )
}

export default Home