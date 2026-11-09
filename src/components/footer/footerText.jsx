import React from 'react';
import './footer.css';

const FooterText = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">ԿՈՆՏԱԿՏՆԵՐ</h2>
        
        <div className="footer-contacts">
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>041-611-611</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <span>AMARANOC.INFO@GMAIL.COM</span>
          </div>
          <div className="contact-item">
            <span className="icon">🌐</span>
            <span>AMARANOC.AM</span>
          </div>
          <div className="contact-item">
            <span className="icon">🔗</span>
            <span>AMARANOC.AM</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>ԹՈՒՄԱՆՅԱՆ 5</span>
          </div>
        </div>

        <div className="footer-privacy">
          <a href="/privacy-policy">Գաղտնիության քաղաքականություն</a>
        </div>

        <div className="footer-bottom">
          <p>ԱՄԱՐԱՆՈՑ ՍՊԸ | Amaranoc LLC | Амараноц ООО</p>
        </div>
      </div>
      
      {/* Ներքևի սարերի ֆոնային նկարազարդումը */}
      <div className="footer-mountains">
        <img src='https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75'/>
      </div>
    </footer>
  );
};

export default FooterText;