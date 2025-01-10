import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        {/* Main Carousel */}
        <Carousel interval={3000} controls={true} indicators={true} id="mainCarousel" className="carousel slide carousel-fade">
          <Carousel.Item>
            <img src="/images/ms3.jpg" className="d-block w-100" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/ms-home11.jpg" className="d-block w-100" alt="Slide 2" /> 
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/ms-sg.jpg" className="d-block w-100" alt="Slide 3" />
          </Carousel.Item>  
          <Carousel.Item>
            <img src="/images/ms-sg1.jpg" className="d-block w-100" alt="Slide 4" />
          </Carousel.Item>
        </Carousel>

        {/* Content Section */}
        <div className="content-wrapper">
          <div className="logo-section">
            <img 
              src="/images/CaptYour-1.jpg" 
              alt="CaptYour Logo" 
              className="main-logo"
            />
          </div>

          <div className="about-section">
            <h2 className="section-title">About Us</h2>
            
            <div className="video-container">
              <iframe 
                src="/images/My Video.mp4"
                title="Introduction Video"
                className="intro-video"
                allowFullScreen
              ></iframe>
            </div>

            <div className="text-content">    
              <h3 className="content-title">
                • Framing Moments: Your Trusted Photography Business
              </h3>
              <p className="content-text">
                Moments into timeless treasures. With a passion for capturing life's
                beauty, we are dedicated to providing exceptional photography
                services that exceed your expectations.
              </p>
              <p className="content-text highlight">
                Contact us today to discuss your photography needs and let us begin 
                the journey of capturing your special moments with passion and expertise.
                <br />
                <strong>Get In Touch</strong>
              </p>
            </div>
          </div>

          <div className="decorative-image">
            <img 
              src="/images/image4.png" 
              alt="Decorative" 
              className="decor-img"
            />
          </div>

          {/* Testimonials Carousel */}
          <Carousel interval={4000} controls={true} indicators={true} id="testimonialCarousel" className="testimonial-carousel">
            <Carousel.Item>
              <img src="/images/cust11.jpeg" className="d-block mx-auto" alt="Customer 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/cust2.png" className="d-block mx-auto" alt="Customer 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/images/cust3.png" className="d-block mx-auto" alt="Customer 3" />
            </Carousel.Item>
          </Carousel>
        </div>
      </HomeContainer>
    );
  }
}
  
const HomeContainer = styled.div`
  .carousel {
    position: relative;
    overflow: hidden;

    &.carousel-fade {
      .carousel-item {
        opacity: 0;
        transition: opacity 0.6s ease-in-out;
        
        &.active {
          opacity: 1;
        }
      }
    }
  }

  .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .carousel-indicators {
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 5px;
      background-color: rgba(255, 255, 255, 0.5);
      
      &.active {
        background-color: white;
      }
    }
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .logo-section {
    text-align: center;
    margin: 2rem 0;

    .main-logo {
      max-width: 800px;
      width: 100%;
      height: auto;
    }
  }

  .about-section {
    text-align: center;
    margin: 3rem 0;

    .section-title {
      font-weight: 200;
      font-size: 35px;
      font-family: 'Berlin Sans FB';
      margin-bottom: 2rem;
    }
  }

  .video-container {
    max-width: 800px;
    margin: 2rem auto;
    
    .intro-video {
      width: 100%;
      height: 450px;
      border: none;
    }
  }

  .text-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;

    .content-title {
      font-size: 24px;
      margin-bottom: 1.5rem;
    }

    .content-text {
      font-size: 18px;
      line-height: 1.6;
      margin-bottom: 1.5rem;

      &.highlight {
        font-weight: 500;
        color: #333;
      }
    }
  }

  .decorative-image {
    text-align: center;
    margin: 2rem 0;

    .decor-img {
      width: 100px;
      height: auto;
    }
  }

  .testimonial-carousel {
    max-width: 700px;
    margin: 0 auto 4rem;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    .content-wrapper {
      padding: 1rem;
    }

    .text-content {
      padding: 1rem;
      text-align: left;
    }

    .section-title {
      font-size: 28px;
    }

    .video-container .intro-video {
      height: 300px;
    }
  }
`;

export default Home;