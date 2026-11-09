import React from 'react';
import CardItem from './CardItem';

export default function CardLine1() {

  const houses = [
    {
      id: 4,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1772096919031--0.050258973710116006image.webp&w=1920&q=75',
      location: 'Արզնի',
      capacity: 30,
      price: '95,000'
    },
    {
      id: 5,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1792584876838--0.7563757694992805image.webp&w=1920&q=75',
      location: 'Գառնի',
      capacity: 30,
      price: '70,000'
    },
    {
      id: 6,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1759149473223--0.33907271602966693image.webp&w=1920&q=75',
      location: 'Բջնի',
      capacity: 6,
      price: '45,000'
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