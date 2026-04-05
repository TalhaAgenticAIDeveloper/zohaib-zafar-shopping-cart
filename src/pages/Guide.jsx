import '../styles/Guide.css';

export default function Guide({ setCurrentPage }) {
  const steps = [
    {
      number: 1,
      icon: '🔍',
      title: 'Browse Products',
      description:
        'Visit our Products page and explore our wide range of items. Each product is carefully selected for quality.',
    },
    {
      number: 2,
      icon: '📋',
      title: 'Choose Your Product',
      description:
        'Select the product you like, choose your preferred size, and review the price and available quantity.',
    },
    {
      number: 3,
      icon: '💬',
      title: 'Contact via WhatsApp',
      description:
        'Click the WhatsApp button or "Order Now" button. This will open WhatsApp with a pre-filled message.',
    },
    {
      number: 4,
      icon: '📝',
      title: 'Confirm Details',
      description:
        'Our team will verify your order details and discuss any customizations or special requirements.',
    },
    {
      number: 5,
      icon: '💳',
      title: 'Payment',
      description:
        'Complete the payment through your preferred method (bank transfer, cash on delivery, etc.)',
    },
    {
      number: 6,
      icon: '🚚',
      title: 'Delivery',
      description:
        'Your order will be carefully packaged and shipped to your address. Track your delivery in real-time.',
    },
  ];

  const faqItems = [
    {
      question: 'How long does delivery usually take?',
      answer:
        'Most orders are delivered within 5-7 business days depending on your location. Express delivery options are available for urgent orders.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy. If the product is damaged or not as described, you can return it for a full refund or exchange.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Currently, we ship within Pakistan only. International shipping will be available soon.',
    },
    {
      question: 'Can I modify my order after placing it?',
      answer:
        'If your order hasn\'t shipped yet, you can modify it by contacting our support team via WhatsApp immediately.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once shipped, you\'ll receive a tracking number via WhatsApp that you can use to monitor your delivery progress.',
    },
  ];

  return (
    <div className="guide-page">
      <div className="guide-header">
        <h1>How to Order</h1>
        <p>A step-by-step guide to make your shopping experience smooth and easy</p>
      </div>

      {/* Ordering Steps */}
      <section className="steps-section">
        <h2>6 Easy Steps</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.number < 6 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="guide-features">
        <h2>Why Order From Us?</h2>
        <div className="features-list">
          <div className="feature">
            <span className="check">✅</span>
            <div>
              <h4>Quality Assured</h4>
              <p>All products go through strict quality checks</p>
            </div>
          </div>
          <div className="feature">
            <span className="check">✅</span>
            <div>
              <h4>Best Prices</h4>
              <p>Competitive pricing without compromising quality</p>
            </div>
          </div>
          <div className="feature">
            <span className="check">✅</span>
            <div>
              <h4>Customer Support</h4>
              <p>Friendly support team available 24/7</p>
            </div>
          </div>
          <div className="feature">
            <span className="check">✅</span>
            <div>
              <h4>Secure Transactions</h4>
              <p>100% secure payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqItems.map((item, index) => (
            <details key={index} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="guide-cta">
        <h2>Ready to Get Started?</h2>
        <p>Browse our collection and find exactly what you're looking for</p>
        <button 
          className="cta-link"
          onClick={() => setCurrentPage('products')}
        >
          View Products →
        </button>
      </section>
    </div>
  );
}
