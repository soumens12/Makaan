import React from 'react';
import Breadcrumbs from '../component/Breadcrumbs';
import PropertyType from '../component/PropertyType';
import Search from '../component/Search';


function PropertytypePage() {
  
  

  return (
    <div>
        <div className="container-xxl bg-white p-0">
            {/* <!-- Header Start --> */}
            <Breadcrumbs page="Property Type" title="Property Type"></Breadcrumbs>
            {/* <!-- Header End --> */}
            
            <Search></Search>

            <PropertyType></PropertyType>

        </div>
    </div>
  )
}

export default PropertytypePage