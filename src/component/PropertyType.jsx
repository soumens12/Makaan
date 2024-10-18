import React from 'react'
import PropertyCard from './PropertyCard';

const cardData = [
    {title: 'Apartment', description: '123 Properties', image: 'assets/img/icon-apartment.png' },
    {title: 'Villa', description: '1234 Properties', image: 'assets/img/icon-villa.png' },
    {title: 'Home', description: '12 Properties', image: 'assets/img/icon-house.png' },
    {title: 'Office', description: '12 Properties', image: 'assets/img/icon-housing.png' },
    {title: 'Building', description: '12 Properties', image: 'assets/img/icon-building.png' },
    {title: 'Townhouse', description: '12 Properties', image: 'assets/img/icon-neighborhood.png' },
    {title: 'Shop', description: '12 Properties', image: 'assets/img/icon-condominium.png' },
    {title: 'Garage', description: '12 Properties', image: 'assets/img/icon-luxury.png' },
    
  ];

function PropertyType() {
  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Property Types</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                      {cardData.map((card) => (
                        <PropertyCard imgTitle={card.title} imgDesc={card.description} imgSrc={card.image} />
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyType