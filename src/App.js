import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/news" component={News} />
            <Route path="/contacts" component={Contact} />
            <Route path="/canon" component={Canon} />
            <Route path="/nikon" component={Nikon} />
            <Route path="/lens" component={Lens} />
            <Route path="/terms" component={Terms} />
            <Route path="/faq" component={Faq} />
            <Route path="/gallery" component={Gallery} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
