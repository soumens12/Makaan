import React from 'react';
import Breadcrumbs from '../component/Breadcrumbs';

import Search from '../component/Search';
import ClientTestimonial from '../component/ClientTestimonial';


function Testimonial() {
  return (
    <div>
        <div className="container-xxl bg-white p-0">
            {/* <!-- Header Start --> */}
            <Breadcrumbs page="Testimonial" title="Testimonial"></Breadcrumbs>
                {/* <!-- Header End --> */}
            {/* <!-- Search Start --> */}
            <Search/>
            {/* <!-- Search End --> */}

            {/* <!-- Testimonial Start --> */}
            <ClientTestimonial></ClientTestimonial>
            {/* <!-- Testimonial End --> */}
        </div>
    </div>
  )
}

export default Testimonial