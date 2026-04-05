import '../styles/Home.css';

export default function Home({ setCurrentPage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ModernShop</h1>
          <p className="hero-subtitle">
            Discover premium products crafted with excellence
          </p>
          <button
            className="cta-button"
            onClick={() => setCurrentPage('products')}
          >
            Explore Products
          </button>
        </div>
        <div className="hero-decoration">
          <div className="decoration-element"></div>
          <div className="decoration-element"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚡</span>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💎</span>
            <h3>Premium Quality</h3>
            <p>Only the finest products for our customers</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🛡️</span>
            <h3>Secure Payment</h3>
            <p>Safe and encrypted payment processing</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🤝</span>
            <h3>24/7 Support</h3>
            <p>Always here to help you with any questions</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Start shopping now and enjoy our exclusive products</p>
        <button
          className="cta-button-secondary"
          onClick={() => setCurrentPage('products')}
        >
          View All Products
        </button>
      </section>
    </div>
  );
}
