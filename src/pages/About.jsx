import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About ModernShop</h1>
        <p className="about-intro">
          Where quality meets affordability, and customer satisfaction is our mission
        </p>
      </section>

      {/* Origin Story */}
      <section className="about-section">
        <div className="section-content">
          <h2>Our Story</h2>
          <p>
            ModernShop was founded in 2020 with a simple vision: to provide high-quality
            products at affordable prices to everyone. What started as a small venture has
            now grown into a trusted brand serving thousands of satisfied customers across
            the country.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-vision">
        <div className="mv-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To deliver exceptional products and outstanding customer service while
            maintaining the highest standards of quality and integrity. We believe in
            building long-term relationships with our customers based on trust and
            transparency.
          </p>
        </div>
        <div className="mv-card">
          <h3>🌟 Our Vision</h3>
          <p>
            To become the most trusted and beloved shopping destination in the region,
            known for our premium products, exceptional service, and commitment to
            sustainability and social responsibility.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="about-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <span className="value-icon">✨</span>
            <h4>Quality</h4>
            <p>We never compromise on the quality of our products</p>
          </div>
          <div className="value-item">
            <span className="value-icon">💚</span>
            <h4>Integrity</h4>
            <p>Honesty and transparency in all our dealings</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🚀</span>
            <h4>Innovation</h4>
            <p>Constantly improving and evolving our offerings</p>
          </div>
          <div className="value-item">
            <span className="value-icon">🤝</span>
            <h4>Community</h4>
            <p>Building meaningful relationships with customers</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat-box">
          <h3>10K+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>500+</h3>
          <p>Products</p>
        </div>
        <div className="stat-box">
          <h3>50+</h3>
          <p>Cities Served</p>
        </div>
        <div className="stat-box">
          <h3>4.8⭐</h3>
          <p>Average Rating</p>
        </div>
      </section>

      {/* Team */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem' }}>
          A passionate group dedicated to bringing you the best shopping experience
        </p>
        <div className="team-grid">
          <div className="team-member">
            <div className="member-avatar">👨‍💼</div>
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍💼</div>
            <h4>Jane Smith</h4>
            <p>Head of Operations</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👨‍💻</div>
            <h4>Mike Johnson</h4>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <div className="member-avatar">👩‍🔬</div>
            <h4>Sarah Williams</h4>
            <p>Quality Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
}
