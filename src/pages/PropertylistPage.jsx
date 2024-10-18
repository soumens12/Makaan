import React from 'react';
import PropertList from '../component/PropertList';
import Breadcrumbs from '../component/Breadcrumbs';
import Search from '../component/Search';

function PropertylistPage() {
  return (
    <>
            {/* <!-- Header Start --> */}
            <Breadcrumbs page="Property List" title="Property List"></Breadcrumbs>
            {/* <!-- Header End --> */}

            <Search></Search>

            <PropertList></PropertList>
        
    </>
  )
}

export default PropertylistPage