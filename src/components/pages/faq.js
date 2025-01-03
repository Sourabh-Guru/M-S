import React from 'react';
import './faq.css';

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="terms-section">
        <h2 className="terms-title">Terms and Conditions</h2>
        <ol className="terms-list">
          <li>Package excludes Travel and Accommodation charges.</li>
          <li>Customer will get 10/20/30 Page album in given package.</li>
          <li>Extra pages are chargeable.</li>
          <li>Extra per page R$ 500.</li>
          <li>70% amount has to pay on wedding day.</li>
          <li>Remaining 30% amount has to pay on album delivery.</li>
          <li>Album or video will be delivered within 15 to 2 months (depends on correction date).</li>
        </ol>
      </div>
    </div>
  );
};

export default Faq;  