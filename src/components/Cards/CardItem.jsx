import React from 'react';
import './Cards.css'; // Եթե ունեք առանձին CSS, կամ կարող եք միացնել գլոբալին

export default function CardItem({ image, title, location, capacity, price }) {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img src={image} alt={title || "Տնակ"} className="card-img" />
        {/* Կետերը սլայդերի համար */}
        <div className="card-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        {/* Սիրտիկի կոճակը */}
        <button className="card-fav-btn">
          ❤️
        </button>
      </div>

      <div className="card-info">
        <div className="card-details-row">
          <span className="card-location">{location}</span>
          <span className="card-capacity">👥 {capacity}</span>
        </div>
        <div className="card-price-row">
          <span className="card-price">{price} ֏</span>
        </div>
      </div>
    </div>
  );
}