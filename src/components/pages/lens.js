import React from 'react';
import styled from 'styled-components';

const Lens = () => {
  const lensform = (e) => {
    e.preventDefault();
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfvxJg6-Gf9gn_9MWg9FgxhfoJ63zRgwdiaegDhU7ugQ-XLCA/viewform?embedded=true";
  };

  const lensProducts = [
    {
      id: 1,
      name: 'Canon EF 50mm f/1.8 STM',
      image: '/images/lens1.jpg',
      specs: [
        'Focal Length: 50mm',
        'Maximum Aperture: f/1.8',
        'Minimum Focusing Distance: 1.15 ft',
        'Stepping Motor (STM) for quiet AF',
        'Optimized lens coatings'
      ],
      price: '₹300'
    },
    {
      id: 2,
      name: 'Canon EF-S 18-55mm',
      image: '/images/lens2.jpg',
      specs: [
        'Focal Length: 18-55mm',
        'Maximum Aperture: f/3.5-5.6',
        'Image Stabilization',
        'Compact and lightweight',
        'Perfect for everyday shooting'
      ],
      price: '₹350'
    },
    {
      id: 3,
      name: 'Canon EF 75-300mm',
      image: '/images/lens3.jpg',
      specs: [
        'Focal Length: 75-300mm',
        'Maximum Aperture: f/4-5.6',
        'Telephoto zoom lens',
        'DC motor drive',
        'Ideal for wildlife and sports'
      ],
      price: '₹400'
    }
  ];

  return (
    <HeaderContainer>
      <div className="container">
        <h1 className="section-title">Professional Camera Lenses</h1>
        <p className="section-subtitle">Choose from our wide range of high-quality lenses</p>
        
        <div className="products-grid">
          {lensProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <ul className="specs-list">
                  {product.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
                <div className="price-section">
                  <p className="price">Starting from {product.price}/day</p>
                  <button 
                    className="rent-button"
                    onClick={lensform}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(rgba(109,109,109,0.1), rgba(255,255,255,0.5));

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .product-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }

  .product-image {
    height: 250px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .product-content {
    padding: 1.5rem;

    h3 {
      font-size: 1.5rem;
      color: #2c3e50;
      margin-bottom: 1rem;
    }
  }

  .specs-list {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;

    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #3498db;
      }
    }
  }

  .price-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .price {
    font-size: 1.2rem;
    color: #2c3e50;
    font-weight: 600;
    margin: 0;
  }

  .rent-button {
    padding: 0.8rem 1.5rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #2980b9;
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .section-title {
      font-size: 2rem;
    }

    .products-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Lens;