import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import './gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const photos = [
    {
      id: 1,
      src: '/images/Product01.jpg',
      category: 'wedding',
      title: 'Elegant Wedding Ceremony',
      description: 'A beautiful moment captured during the wedding vows'
    },
    {
      id: 2,
      src: '/images/pre01.jpg',
      category: 'prewedding',
      title: 'Romantic Pre-wedding Shoot',
      description: 'Sunset pre-wedding shoot at the beach'
    },
    {
      id: 3,
      src: '/images/Pre0102.jpg',
      category: 'engagement',
      title: 'Engagement Celebration',
      description: 'Ring ceremony and family portraits'
    },
    {
      id: 4,
      src: '/images/air-3s.jpg',
      category: 'candid',
      title: 'Candid Moments',
      description: 'Natural and spontaneous expressions'
    },
    {
      id: 5,
      src: '/images/ms-home12345.jpg',
      category: 'wedding',
      title: 'Traditional Ceremony',
      description: 'Beautiful traditional wedding rituals'
    },
    {
      id: 6,
      src: '/images/ms-home123.jpg',
      category: 'prewedding',
      title: 'Urban Love Story',
      description: 'City lights pre-wedding shoot'
    }
  ];

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const loadImage = (photo) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          console.log(`Successfully loaded image: ${photo.src}`);
          setLoadedImages(prev => new Set([...prev, photo.id]));
          resolve();
        };
        img.onerror = (error) => {
          console.error(`Failed to load image: ${photo.src}`, error);
          reject(new Error(`Failed to load image: ${photo.src}`));
        };
        img.src = photo.src;
      });
    };

    const loadAllImages = async () => {
      try {
        console.log('Starting to load all images...');
        await Promise.all(photos.map(loadImage));
        console.log('All images loaded successfully');
        setLoading(false);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Some images failed to load. Please try refreshing the page.');
        setLoading(false);
      }
    };

    loadAllImages();

    return () => {
      setSelectedImage(null);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const filteredPhotos = filter === 'all'
    ? photos
    : photos.filter(photo => photo.category === filter);

  if (error) {
    return (
      <div className="gallery-container">
        <div className="gallery-error">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <h1 className="gallery-title fade-in">Our Photography Portfolio</h1>

      <div className="filter-buttons fade-in">
        <button
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'wedding' ? 'active' : ''}
          onClick={() => setFilter('wedding')}
        >
          Wedding
        </button>
        <button
          className={filter === 'prewedding' ? 'active' : ''}
          onClick={() => setFilter('prewedding')}
        >
          Pre-Wedding
        </button>
        <button
          className={filter === 'engagement' ? 'active' : ''}
          onClick={() => setFilter('engagement')}
        >
          Engagement
        </button>
        <button
          className={filter === 'candid' ? 'active' : ''}
          onClick={() => setFilter('candid')}
        >
          Candid
        </button>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading gallery...</p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="gallery-grid"
          columnClassName="gallery-grid_column"
        >
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="gallery-item fade-in"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.title}
                className={loadedImages.has(photo.id) ? 'loaded' : ''}
              />
              <div className="gallery-item-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </Masonry>
      )}

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
            <button className="close-button" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
