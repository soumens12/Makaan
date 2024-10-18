import React from 'react';
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import testimonial1 from "../component/testimonial-image/testimonial-1.jpg";
import testimonial2 from "../component/testimonial-image/testimonial-2.jpg";
import testimonial3 from "../component/testimonial-image/testimonial-3.jpg";

function ClientTestimonial() {
  return (
    <>
        <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                        <h1 className="mb-3">Our Clients Say!</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <OwlCarousel 
                    className="owl-theme testimonial-carousel wow fadeInUp" data-wow-delay="0.1s"
                    autoplay={true}
                    smartSpeed={1500}
                    dots={false}
                    loop={true}
                    nav={true}
                    navText={[
                        '<i class="bi bi-chevron-left"></i>',
                        '<i class="bi bi-chevron-right"></i>'
                    ]}
                    responsive={{
                        0: { items: 1 },  
                        992: { items: 2 } 
                      }}>
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src={testimonial1} style={{width: "45px", height: "45px"}} alt=''/>
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
                                    <img className="img-fluid flex-shrink-0 rounded" src={testimonial2} style={{width: "45px", height: "45px"}} alt=''/>
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
                                    <img className="img-fluid flex-shrink-0 rounded" src={testimonial3} style={{width: "45px", height: "45px"}} alt=''/>
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    
                </div>
            </div>
    </>
  )
}

export default ClientTestimonial