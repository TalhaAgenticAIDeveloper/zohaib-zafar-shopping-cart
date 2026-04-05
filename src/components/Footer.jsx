import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="brand-icon">✨</span>
            <h3>ModernShop</h3>
            <p>Premium Quality Products</p>
          </div>

          <div className="footer-links">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#guide">Guide</a>
            <a href="mailto:info@modernshop.com">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://wa.me/923038297337" target="_blank" rel="noopener noreferrer" title="WhatsApp">📱</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="email">✉️</a>
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
