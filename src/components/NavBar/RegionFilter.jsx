import React from 'react';

const regionsData = [
  { id: 'sevan', name: 'Սևան', count: 6 },
  { id: 'dilijan', name: 'Դիլիջան', count: 5 },
  { id: 'stepanavan', name: 'Ստեփանավան', count: 1 },
  { id: 'aparan', name: 'Ապարան', count: 1 },
  { id: 'hrazdan', name: 'Հրազդան', count: 1 },
];

export default function RegionFilter({ selectedRegions = [], onChange }) {
  const handleToggle = (id) => {
    if (selectedRegions.includes(id)) {
      onChange(selectedRegions.filter((item) => item !== id));
    } else {
      onChange([...selectedRegions, id]);
    }
  };

  return (
    <div className="filter-section">
      <div className="filter-title">Տարածաշրջան</div>
      <div className="region-list">
        {regionsData.map((region) => (
          <label key={region.id} className="region-item">
            <input
              type="checkbox"
              checked={selectedRegions.includes(region.id)}
              onChange={() => handleToggle(region.id)}
            />
            <span>
              {region.name} <span className="region-count">{region.count}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}