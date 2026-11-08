import React from 'react';

export default function OverNightFilter({ value = 'all', onChange }) {
  const options = [
    { label: 'Բոլորը', value: 'all' },
    { label: 'Այո', value: 'yes' },
    { label: 'Ոչ', value: 'no' },
  ];

  return (
    <div className="filter-section">
      <div className="filter-title">Գիշերակացի առկայություն</div>
      <div className="pill-group">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`pill-btn ${value === opt.value ? 'active' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}