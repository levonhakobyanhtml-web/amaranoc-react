import React from 'react';

export default function Pool({ selected = 'all', setSelected }) {
  const options = [
    { label: 'Բոլորը', value: 'all' },
    { label: 'Բաց', value: 'open' },
    { label: 'Փակ', value: 'closed' },
  ];

  return (
    <div className="filter-section">
      <div className="filter-title">Լողավազան</div>
      <div className="pill-group">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={`pill-btn ${selected === opt.value ? 'active' : ''}`}
            onClick={() => setSelected(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}