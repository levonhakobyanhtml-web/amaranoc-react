import React from 'react';
import CardItem from './CardItem';

export default function CardLine1() {

  const houses = [
    {
      id: 4,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1756396894573--0.7238261570241147image.webp&w=1920&q=75',
      location: 'Արզնի',
      capacity: 50,
      price: '140,000'
    },
    {
      id: 5,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1758095203425--0.034694092059661896image.webp&w=1920&q=75',
      location: 'Ծաղկաձոր',
      capacity: 12,
      price: '80,000'
    },
    {
      id: 6,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793106463338--0.8260012018279115image.webp&w=1920&q=75',
      location: 'Բյուրական',
      capacity: 3,
      price: '35,000'
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