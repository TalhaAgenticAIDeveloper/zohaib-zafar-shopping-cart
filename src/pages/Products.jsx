import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Premium T-Shirt',
      size: 'M, L, XL',
      price: 1499,
      quantity: '50 in stock',
      image: '/images/tshirt.svg'
    },
    {
      id: 2,
      name: 'Classic Jeans',
      size: '30, 32, 34, 36',
      price: 3499,
      quantity: '35 in stock',
      image: '/images/jeans.svg'
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      size: '6-12 UK',
      price: 5999,
      quantity: '25 in stock',
      image: '/images/sneakers.svg'
    },
    {
      id: 4,
      name: 'Sunglasses',
      size: 'One Size',
      price: 2499,
      quantity: '60 in stock',
      image: '/images/sunglasses.svg'
    },
    {
      id: 5,
      name: 'Leather Belt',
      size: '28-42 inches',
      price: 1299,
      quantity: '45 in stock',
      image: '/images/belt.svg'
    },
    {
      id: 6,
      name: 'Wool Hat',
      size: 'M, L',
      price: 999,
      quantity: '70 in stock',
      image: '/images/hat.svg'
    },
    {
      id: 7,
      name: 'Casual Blazer',
      size: 'S, M, L, XL',
      price: 5499,
      quantity: '20 in stock',
      image: '/images/blazer.svg'
    },
    {
      id: 8,
      name: 'Designer Watch',
      size: 'One Size',
      price: 12999,
      quantity: '15 in stock',
      image: '/images/watch.svg'
    },
  ];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our collection of premium items</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
