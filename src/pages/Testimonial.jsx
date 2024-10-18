import React from 'react';
import Breadcrumbs from '../component/Breadcrumbs';

import Search from '../component/Search';
import ClientTestimonial from '../component/ClientTestimonial';


function Testimonial() {
  return (
    <>
            {/* <!-- Header Start --> */}
            <Breadcrumbs page="Testimonial" title="Testimonial"></Breadcrumbs>
                {/* <!-- Header End --> */}
            {/* <!-- Search Start --> */}
            <Search/>
            {/* <!-- Search End --> */}

            {/* <!-- Testimonial Start --> */}
            <ClientTestimonial></ClientTestimonial>
            {/* <!-- Testimonial End --> */}
    </>
  )
}

export default Testimonial