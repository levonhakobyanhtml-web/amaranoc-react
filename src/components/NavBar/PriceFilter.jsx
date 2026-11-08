import React from 'react';

const currencies = [
  { symbol: '֏', code: 'AMD' },
  { symbol: '$', code: 'USD' },
  { symbol: '€', code: 'EUR' },
  { symbol: '₽', code: 'RUB' },
];

export default function PriceFilter({ currency = 'AMD', setCurrency, minPrice, setMinPrice, maxPrice, setMaxPrice }) {
  return (
    <div className="filter-section">
      <div className="filter-title">Արժեք</div>
      <div className="currency-selector">
        {currencies.map((curr) => (
          <button
            key={curr.code}
            className={`currency-btn ${currency === curr.code ? 'active' : ''}`}
            onClick={() => setCurrency(curr.code)}
          >
            {curr.symbol}
          </button>
        ))}
      </div>
      <div className="price-inputs">
        <div className="price-input-wrapper">
          <input
            type="number"
            placeholder="Սկսած"
            value={minPrice || ''}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{background:"white",color:"black"}}
          />
        </div>
        <span>-</span>
        <div className="price-input-wrapper">
          <input
            type="number"
            placeholder="Մինչև"
            value={maxPrice || ''}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{background:"white",color:"black"}}
          />
        </div>
      </div>
    </div>
  );
}