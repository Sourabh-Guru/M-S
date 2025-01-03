import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <div className='footer-content'>
        <div className='links'>
          <Link to="/">Home</Link>
          <Link to="/products">Services</Link>
          <Link to="/contacts">Enquire</Link>
          <Link to="/faq">FAQ's</Link>
          <Link to="/terms">Terms</Link>
        </div>
        
        <div className='social'>
          <a href='https://www.instagram.com/ms_filmsproduction/' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href='http://wa.me/918861528668' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        
        <div className='copyright'>
          &copy;{new Date().getFullYear()} CaptYour.in MS FILMS PRODUCTION
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background: #343a40;
  padding: 2rem 1rem;
  color: #fff;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .links {
    margin-bottom: 1.5rem;
    
    a {
      color: #fff;
      text-decoration: none;
      margin: 0 1rem;
      font-size: 0.9rem;
      
      &:hover {
        color: #17a2b8;
      }
    }
  }

  .social {
    margin-bottom: 1.5rem;
    
    a {
      color: #fff;
      font-size: 1.5rem;
      margin: 0 1rem;
      
      &:hover {
        color: #17a2b8;
      } 
    }
  }

  .copyright {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .links a {
      display: block;
      margin: 0.5rem 0;
    }
  }
`;
