import React from 'react'

function PropertyCard({ imgSrc, imgTitle, imgDesc }) {
  return (
    <>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="cat-item d-block bg-light text-center rounded p-3" href="/">
                            <div className="rounded p-4">
                                <div className="icon mb-3">
                                    <img className="img-fluid" src={imgSrc} alt={imgTitle} />
                                </div>
                                <h6>{imgTitle}</h6>
                                <span>{imgDesc}</span>
                            </div>
                        </a>
         </div>
    </>
  )
}

export default PropertyCard