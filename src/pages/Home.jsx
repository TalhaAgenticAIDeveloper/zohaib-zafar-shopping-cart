import '../styles/Home.css';

export default function Home({ setCurrentPage }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Nayab Jewellers</h1>
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
          <div className="jewelry-image">
            <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#FFE559', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#FFD700', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#FFA500', stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#FFFFFF', stopOpacity: 0.9}} />
                  <stop offset="50%" style={{stopColor: '#E8E8E8', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#B0C4DE', stopOpacity: 1}} />
                </linearGradient>
                <filter id="glowGold">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="shadow">
                  <feDropShadow dx="2" dy="4" stdDeviation="6" floodOpacity="0.4"/>
                </filter>
              </defs>
              
              {/* Chain links - top */}
              <circle cx="150" cy="20" r="6" fill="url(#goldGradient)" filter="url(#glowGold)"/>
              <rect x="145" y="25" width="10" height="30" fill="url(#goldGradient)" filter="url(#glowGold)" rx="5"/>
              
              {/* Main pendant - upper ornament */}
              <g filter="url(#shadow)">
                {/* Ornate setting */}
                <circle cx="150" cy="70" r="28" fill="url(#goldGradient)" filter="url(#glowGold)"/>
                <circle cx="150" cy="70" r="24" fill="none" stroke="url(#goldGradient)" strokeWidth="2"/>
                
                {/* Central diamond - main focus */}
                <polygon points="150,35 172,70 150,105 128,70" fill="url(#diamondGradient)" filter="url(#glowGold)"/>
                <polygon points="150,35 172,70 150,105 128,70" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.6"/>
              </g>
              
              {/* Middle connector - decorative */}
              <rect x="145" y="105" width="10" height="25" fill="url(#goldGradient)" filter="url(#glowGold)" rx="5"/>
              
              {/* Lower ornament with smaller diamonds */}
              <g filter="url(#shadow)">
                <circle cx="150" cy="165" r="22" fill="url(#goldGradient)" filter="url(#glowGold)"/>
                <circle cx="150" cy="165" r="18" fill="none" stroke="url(#goldGradient)" strokeWidth="2"/>
                
                {/* Small diamond top */}
                <polygon points="150,145 162,165 150,185 138,165" fill="url(#diamondGradient)" filter="url(#glowGold)" opacity="0.8"/>
                
                {/* Smaller accent diamonds */}
                <circle cx="130" cy="165" r="5" fill="url(#diamondGradient)" filter="url(#glowGold)"/>
                <circle cx="170" cy="165" r="5" fill="url(#diamondGradient)" filter="url(#glowGold)"/>
              </g>
              
              {/* Bottom drop tassel */}
              <g filter="url(#shadow)">
                <rect x="145" y="188" width="10" height="40" fill="url(#goldGradient)" filter="url(#glowGold)" rx="5"/>
                <polygon points="150,228 165,250 135,250" fill="url(#diamondGradient)" filter="url(#glowGold)"/>
              </g>
              
              {/* Left chain section */}
              <g opacity="0.7">
                <line x1="100" y1="100" x2="120" y2="120" stroke="url(#goldGradient)" strokeWidth="3" filter="url(#glowGold)"/>
                <circle cx="105" cy="105" r="3" fill="url(#diamondGradient)"/>
              </g>
              
              {/* Right chain section */}
              <g opacity="0.7">
                <line x1="200" y1="100" x2="180" y2="120" stroke="url(#goldGradient)" strokeWidth="3" filter="url(#glowGold)"/>
                <circle cx="195" cy="105" r="3" fill="url(#diamondGradient)"/>
              </g>
              
              {/* Highlighted shine on main diamond */}
              <ellipse cx="148" cy="50" rx="8" ry="12" fill="white" opacity="0.4"/>
              <ellipse cx="152" cy="52" rx="4" ry="6" fill="white" opacity="0.6"/>
            </svg>
          </div>
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
