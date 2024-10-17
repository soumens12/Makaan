import React from 'react';
import PropertyAgent from '../component/PropertyAgent';
import Breadcrumbs from '../component/Breadcrumbs';
import Search from '../component/Search';

function PropertyagentPage() {
  return (
    <div>
        <div className="container-xxl bg-white p-0">
            {/* <!-- Header Start --> */}
            <Breadcrumbs page="Property Agent" title="Property Agent"></Breadcrumbs>
            {/* <!-- Header End --> */}

            <Search></Search>
            <PropertyAgent></PropertyAgent>
        </div>
    </div>
  )
}

export default PropertyagentPage