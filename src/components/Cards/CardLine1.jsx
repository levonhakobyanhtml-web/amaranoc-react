import React from 'react';
import CardItem from './CardItem';

export default function CardLine1() {

  const houses = [
    {
      id: 1,
      image: 'https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1705829500856--0.9156560389221753image.webp&w=1920&q=75',
      location: 'Ստեփանավան',
      capacity: 6,
      price: '45,000'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
      location: 'Դիլիջան',
      capacity: 4,
      price: '25,000'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      location: 'Դիլիջան',
      capacity: 4,
      price: '25,000'
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