import React from 'react';
import CardItem from './CardItem';

export default function CardLine1() {

  const houses = [
    {
      id: 4,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1794045359882--0.10667854956158696image.webp&w=1920&q=75',
      location: 'Դիլիջան',
      capacity: 6,
      price: '25,000'
    },
    {
      id: 5,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793966264844--0.07420987715778882image.webp&w=1920&q=75',
      location: 'Օհանավան',
      capacity: 8,
      price: '100,000'
    },
    {
      id: 6,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793880970905--0.476490812876911image.webp&w=1920&q=75',
      location: 'Ջերմուկ',
      capacity: 2,
      price: '38,000'
    }
  ];

  return (
    <div className="card-line-section2">
      <div className="card-line-header">
     
      </div>

      <div className="cards-grid">
        {houses.map((house) => (
          <CardItem 
            key={house.id}
            image={house.image}
            location={house.location}
            capacity={house.capacity}
            price={house.price}
          />
        ))}
      </div>
    </div>
  );
}