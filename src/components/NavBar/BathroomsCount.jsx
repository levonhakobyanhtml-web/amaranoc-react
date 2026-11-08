import React from 'react';

export default function BathroomsCount({ selected = 'all', setSelected }) {
  const options = [
    { label: 'Բոլորը', value: 'all', isCircle: false },
    { label: '1', value: '1', isCircle: true },
    { label: '2', value: '2', isCircle: true },
    { label: '3+', value: '3+', isCircle: true },
  ];

  return (
    <div className="filter-section">
      <div className="filter-title">Սանիտարական հանգույցների քանակ</div>
      <div className="pill-group">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`pill-btn ${opt.isCircle ? 'circle' : ''} ${selected === opt.value ? 'active' : ''}`}
            onClick={() => setSelected(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}