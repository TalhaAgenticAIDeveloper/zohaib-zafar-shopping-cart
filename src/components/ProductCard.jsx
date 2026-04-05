import '../styles/ProductCard.css';

export default function ProductCard({ product }) {
  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${product.name} (Size: ${product.size}) - Price: Rs. ${product.price}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923038297337?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <div className="product-details">
          <span className="product-size">📏 Size: {product.size}</span>
          <span className="product-quantity">📦 Qty: {product.quantity}</span>
        </div>
        <div className="product-footer">
          <span className="product-price">Rs. {product.price}</span>
          <button className="buy-btn" onClick={handleWhatsApp}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
