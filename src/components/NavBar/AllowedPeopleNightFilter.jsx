import React from 'react';

export default function AllowedPeopleNightFilter({ count = 0, setCount }) {
  return (
    <div className="filter-section">
      <div className="filter-title">Մարդկանց թույլատրելի քանակը գիշերակացով</div>
      <div className="counter-control">
        <button
          className="counter-btn"
          onClick={() => setCount(Math.max(0, count - 1))}
          disabled={count <= 0}
        >
          -
        </button>
        <div className="counter-display">{count}</div>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}