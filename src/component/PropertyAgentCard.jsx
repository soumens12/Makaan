import React from 'react';
import { NavLink } from 'react-router-dom';

function PropertyAgentCard(props) {
  return (
    <>
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={props.image} alt={props.title} />
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <NavLink className="btn btn-square mx-1" target='_blank' to="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink className="btn btn-square mx-1" target='_blank' to="https://x.com/"><i className="fab fa-twitter"></i></NavLink>
                                    <NavLink className="btn btn-square mx-1" target='_blank' to="/"><i className="fab fa-instagram"></i></NavLink>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">{props.fullname}</h5>
                                <small>{props.designation}</small>
                            </div>
            </div>
        </div>
    </>
  )
}

export default PropertyAgentCard