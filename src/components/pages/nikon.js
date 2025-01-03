import React, { Component } from 'react';
import styled from 'styled-components';

class Nikon extends Component {
  nikonform = (e) => {
    e.preventDefault();
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfvxJg6-Gf9gn_9MWg9FgxhfoJ63zRgwdiaegDhU7ugQ-XLCA/viewform?embedded=true";
  }

  render() {
    return (
      <HeaderContainer>
        <div className="container">
          <div className="card mb-4">
            <img className="card-img-top img-fluid" src="/images/product1.jpeg" alt="Nikon Camera" />
            <div className="card-body">
              <h4 className="card-title" style={{fontSize: '28px'}}><b>Nikon D5600</b></h4>
              <p className="card-text" style={{fontSize: '18px'}}>
                <b>Specifications:</b>
                <ul>
                  <li>24.2MP DX-Format CMOS Sensor</li>
                  <li>EXPEED 4 Image Processor</li>
                  <li>3.2" 1.037m-Dot Vari-Angle Touchscreen</li>
                  <li>Full HD 1080p Video Recording at 60 fps</li>
                  <li>Multi-CAM 4800DX 39-Point AF System</li>
                  <li>ISO 100-25600</li>
                </ul>
              </p>
              <div className="price-container" style={{display: 'flex', flexWrap: 'wrap'}}>
                <button 
                  type="submit" 
                  className="btn btn-outline-primary text-uppercase" 
                  onClick={this.nikonform}
                  style={{
                    padding: '.7rem',
                    fontSize: '1rem',
                    marginBottom: '20px',
                    fontWeight: '700',
                    borderRadius: '.45rem',
                    marginLeft: '70px'
                  }}
                >
                  Rent Now 
                  <span style={{color: 'black', fontWeight: '500', paddingLeft: '5px'}}>@</span>
                  <del style={{color: 'black', fontWeight: '500', paddingLeft: '5px'}}>₹600/-</del>
                  <span style={{color: 'black', fontWeight: '700', paddingLeft: '5px'}}>₹450/-</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  background: linear-gradient(rgba(109,109,109,0.3), rgba(255,255,255,0.5));
  padding: 3rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .card-img-top {
    height: 400px;
    object-fit: cover;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 1rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #007bff;
    }
  }
`;

export default Nikon;