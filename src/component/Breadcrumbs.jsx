import React from 'react';
import aboutHeader from '../component/about-image/header.jpg';

function Breadcrumbs(prop) {
  return (
    <div>
        {/* <!-- Header Start --> */}
      <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">{prop.title} {prop.smallTitle}</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Pages</a></li>
                            <li className="breadcrumb-item text-body active" aria-current="page">{prop.page}</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src={aboutHeader} alt="" />
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </div>
  )
}

export default Breadcrumbs