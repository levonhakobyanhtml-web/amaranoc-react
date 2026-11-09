import React from 'react';
import CardItem from './CardItem';

export default function CardLine1() {

  const houses = [
    {
      id: 1,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1705829500856--0.9156560389221753image.webp&w=1920&q=75',
      location: 'Ծախկաձոր',
      capacity: 6,
      price: '45,000'
    },
    {
      id: 2,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1778660910917--0.5990204695636232image.webp&w=1920&q=75',
      location: 'Դիլիջան',
      capacity:10,
      price: '35,000'
    },
    {
      id: 3,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1793105950875--0.5012007430617718image.webp&w=1920&q=75',
      location: 'Բյուրական',
      capacity: 5,
      price: '40,000'
    }
  ];

  return (
    <div className="card-line-section">
      <div className="card-line-header">
        <div className="card-line-actions">
          <button className="nav-arrow-btn">[] []</button>
          <button className="nav-arrow-btn active">[] [] []</button>
        </div>
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