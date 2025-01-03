import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './products.css';

class Products extends Component { 
  state = {
    isHovered: null
  };

  handleHover = (index) => {
    this.setState({ isHovered: index }); 
  };

  render() {
    const services = [
      {
        id: 1,
        image: './images/product01.jpg', 
        title: 'Signature Wedding Collection',
        description: 'Experience the artistry of wedding photography at its finest. Our signature collection includes:\n• Full-day coverage\n• Cinematic storytelling\n• Luxury photo album\n• Drone aerial shots\n• Same-day preview edits',
        price: 'Starting from ₹.....',
        link: '/wedding' 
      },
      {
        id: 2,
        image: '/images/Pre0102.jpg',
        title: 'Premium Pre-Wedding Experience',
        description: 'Create timeless memories with our premium pre-wedding package featuring:\n• Multiple locations\n• Professional styling\n• Concept-based shoots\n• Cinematic video highlights\n• Digital album',
        price: 'Starting from ₹.....',
        link: '/prewedding'
      },
      {
        id: 3,
        image: '/images/Pre123.jpg',
        title: 'Engagement & Reception Special',
        description: 'Capture the magic of your special moments with our complete package:\n• Traditional & candid coverage\n• Family portraits\n• Same-day slideshow\n• Premium photo prints\n• Digital delivery',
        price: 'Starting from ₹.....',
        link: '/engagement'
      },
      {
        id: 4,
        image: '.././images/air-3s.jpg',
        title: 'Candid Moments Collection',
        description: 'Let us tell your story through our artistic lens with:\n• Photojournalistic approach\n• Emotion-focused captures\n• Natural light photography\n• Candid family moments\n• High-resolution images',
        price: 'Starting from ₹.....',
        link: '/candid'
      }
    ];

    return (
      <div className="services-container">
        <h1 className="services-title">Our Photography Services</h1>
        <p className="services-subtitle">Capturing Your Precious Moments with Elegance</p>
        
        <div className="card-deck-container">   
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card ${this.state.isHovered === index ? 'hovered' : ''}`}
              onMouseEnter={() => this.handleHover(index)}
              onMouseLeave={() => this.handleHover(null)}
            >
              <div className="card-image-container">  
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="card-img-top img-fluid"
                />
                <div className="price-tag">{service.price}</div>
              </div>
              
              <div className="card-content">
                <h3 className="service-title">{service.title}</h3>
                <div className="service-description">
                  {service.description.split('\n').map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                </div>
                <Link 
                  to={service.link}
                  className="book-now-btn"
                  onClick={() => setTimeout(() => window.location.href = '/contacts', 500)}
                >
                  Book Now
                  <span className="arrow-icon">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-banner">
          <h2>Ready to Create Beautiful Memories?</h2>
          <p>Contact us for custom packages and special offers</p>
          <Link to="/gallery" className="contact-btn">View Our Gallery</Link>   
        </div> 
      </div>
    );
  }
}  

export default Products;
