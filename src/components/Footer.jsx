import '../styles/Footer.css';

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="brand-icon">✨</span>
            <h3>ModernShop</h3>
            <p>Premium Quality Products</p>
            <p className="footer-address">📍 Chowk Pakpattan, Tehsil and District Sahwal</p>
          </div>

          <div className="footer-links">
            <button onClick={() => handleNavigation('products')} className="footer-link-btn">Products</button>
            <button onClick={() => handleNavigation('about')} className="footer-link-btn">About</button>
            <button onClick={() => handleNavigation('guide')} className="footer-link-btn">Guide</button>
    
          </div>

          <div className="footer-social">
            <a href="https://wa.me/923096517621" target="_blank" rel="noopener noreferrer" title="WhatsApp">📱</a>
            <a href="mailto:nayabjewellery90@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">✉️</a>
            <a href="#" title="Instagram">📷</a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ModernShop. Made with ❤️ in Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
