import React, { useState } from 'react';
import './Announcement.css';

const Announcement = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
  });

  // Նոր state՝ հասկանալու համար, թե արդյոք հայտը ուղարկվել է թե ոչ
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    
    // Ցույց ենք տալիս հաջողության հաղորդագրությունը
    setIsSubmitted(true);
    
    // Մաքրում ենք ինպութների դաշտերը
    setFormData({
      fullName: '',
      phone: '',
      email: '',
    });
  };

  return (
    <section className="announcement-section">
      <div className="announcement-card">
        <div className="announcement-header">
          <span className="line"></span>
          <h2>ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
          <span className="line"></span>
        </div>

        {isSubmitted ? (
          /* Եթե հայտը ուղարկվել է, բերում է այս հաղորդագրությունը */
          <div className="success-message">
            <h3>Հայտը ընդունված է</h3>
            <p>Շնորհակալություն, մենք շուտով կկապնվենք Ձեզ հետ։</p>
            <button 
              className="submit-btn" 
              onClick={() => setIsSubmitted(false)}
              style={{ marginTop: '20px' }}
            >
              Նոր հայտ ուղարկել
            </button>
          </div>
        ) : (
          /* Հակառակ դեպքում ցույց է տալիս ֆորման */
          <>
            <p className="announcement-subtitle">
              Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
            </p>

            <form className="announcement-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Անուն Ազգանուն"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Հեռախոսահամար"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Էլ․ հասցե"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit" className="submit-btn">
                Ուղարկել
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Announcement;