import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';

// Page Components
import Home from './components/pages/home';
import Products from './components/pages/products';
import Contact from './components/pages/contacts';
import News from './components/pages/news';
import Canon from './components/pages/canon';
import Nikon from './components/pages/nikon';
import Lens from './components/pages/lens';
import Terms from './components/pages/terms';
import Faq from './components/pages/faq';
import Gallery from './components/pages/gallery';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/canon" element={<Canon />} />
          <Route path="/nikon" element={<Nikon />} />
          <Route path="/lens" element={<Lens />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
