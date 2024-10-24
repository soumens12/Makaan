import React from 'react';
import Breadcrumbs from '../component/Breadcrumbs';
import Search from '../component/Search';
import ContactForm from '../component/ContactForm';

function Contact() {
  return (
    <div>
        <div className="container-xxl bg-white p-0">
        {/* <!-- Header Start --> */}
        <Breadcrumbs page="Contact" title="Contact Us"></Breadcrumbs>
        {/* <!-- Header End --> */}


        {/* <!-- Search Start --> */}
        <Search/>
        {/* <!-- Search End --> */}


        {/* <!-- Contact Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Contact Us</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-map-marker-alt text-primary"></i>
                                        </div>
                                        <span>123 Street, New York, USA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-envelope-open text-primary"></i>
                                        </div>
                                        <span>info@example.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-phone-alt text-primary"></i>
                                        </div>
                                        <span>+012 345 6789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <iframe className="position-relative rounded w-100 h-100" title='myFrame'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameborder="0" style={{minHeight: "400px", border:0}} allowfullscreen="" aria-hidden="false"
                            tabindex="0"></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <ContactForm></ContactForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact End --> */}
        </div>
    </div>
  )
}

export default Contact