import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import './memories.css';

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const photos = [
    {
      id: 1,
      src: '/images/product01.jpg',
      category: 'wedding',
      title: 'Elegant Wedding Ceremony',
      description: 'A beautiful moment captured during the wedding vows'
    },
    {
      id: 2,
      src: '/images/Pre0102.jpg',
      category: 'prewedding',
      title: 'Romantic Pre-wedding Shoot',
      description: 'Sunset pre-wedding shoot at the beach' 
    },
    {
      id: 3,
      src: '/images/Pre123.jpg',
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
    // Add more photos here with different categories
    {
      id: 5,
      src: '/images/gallery/wedding1.jpg',
      category: 'wedding',
      title: 'Traditional Ceremony',
      description: 'Beautiful traditional wedding rituals'
    },
    {
      id: 6,
      src: '/images/gallery/prewedding1.jpg',
      category: 'prewedding',
      title: 'Urban Love Story',
      description: 'City lights pre-wedding shoot'
    }
  ];

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  useEffect(() => {
    // Simulate loading of images
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="memories-container">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="memories-title"
      >
        Our Photography Portfolio
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="filter-buttons"
      >
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
          Weddings
        </button>
        <button 
          className={filter === 'prewedding' ? 'active' : ''} 
          onClick={() => setFilter('prewedding')}
        >
          Pre-wedding
        </button>
        <button 
          className={filter === 'engagement' ? 'active' : ''} 
          onClick={() => setFilter('engagement')}
        >
          Engagements
        </button>
        <button 
          className={filter === 'candid' ? 'active' : ''} 
          onClick={() => setFilter('candid')}
        >
          Candid
        </button>
      </motion.div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading beautiful memories...</p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumns}
          className="memories-grid"
          columnClassName="memories-grid_column"
        >
          {filteredPhotos.map((photo) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={photo.id}
              className="photo-item"
              onClick={() => openLightbox(photo)}
            >
              <div className="photo-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
              <img src={photo.src} alt={photo.title} loading="lazy" />
            </motion.div>
          ))}
        </Masonry>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox"
            onClick={closeLightbox}
          >
            <button className="close-button" onClick={closeLightbox}>×</button>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="lightbox-info">
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </div>
    </div>
  );
};

export default Memories;