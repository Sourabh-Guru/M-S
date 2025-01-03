import React, { useState } from 'react';
import './contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    reference: '',
    message: '',
    contactNo: '',
    eventDate: '',
    venue: ''
  });

  const eventTypes = [
    'Wedding Photography',
    'Pre-Wedding Shoot',
    'Engagement/Ring Ceremony',
    'Birthday Photography',
    'Corporate Event',
    'Baby Shower',
    'Reception',
    'Other'
  ];

  const referenceTypes = [
    'Instagram (@ms_filmsproduction)',
    'Facebook',
    'Friends/Family',
    'Google Search',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formatMessage = (data) => {
    return `🎉 *New Event Booking Enquiry* 🎉%0A%0A
*Contact Details*%0A
👤 Name: ${data.name}%0A
📞 Contact: ${data.contactNo}%0A
📧 Email: ${data.email}%0A%0A
*Event Information*%0A
📅 Event Type: ${data.eventType}%0A
📆 Event Date: ${data.eventDate}%0A
📍 Venue: ${data.venue}%0A%0A
*Additional Information*%0A
💬 Message: ${data.message}%0A%0A
*Reference*%0A
🔍 Found us through: ${data.reference}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = formatMessage(formData);
    const whatsappUrl = `https://wa.me/918861528668?text=${whatsappMessage}`;
    
    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      eventType: '',
      reference: '',
      message: '',
      contactNo: '',
      eventDate: '',
      venue: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-card">
              <h2 className="contact-title">📸 Book Your Photography Session</h2>
              <p className="contact-subtitle">Fill in the details below and we'll get back to you soon!</p>
              
              <form onSubmit={handleSubmit}> 
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">
                      <i className="fas fa-id-card"></i> Your Name
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Enter your full name" 
                      value={formData.name}
                      onChange={handleChange}
                      minLength="3"
                      maxLength="50"
                      required
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="contactNo">
                      <i className="fab fa-whatsapp"></i> WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="contactNo"
                      name="contactNo"
                      className="form-control"
                      placeholder="Enter your WhatsApp number"
                      value={formData.contactNo}
                      onChange={handleChange}
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="far fa-envelope"></i> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="eventType">
                      <i className="fas fa-camera"></i> Type of Event
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="form-control"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="eventDate">
                      <i className="far fa-calendar-alt"></i> Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      className="form-control"
                      value={formData.eventDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="venue">
                    <i className="fas fa-map-marker"></i> Event Venue
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    className="form-control"
                    placeholder="Enter event venue/location"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reference">
                    <i className="fas fa-hashtag"></i> How did you find us?
                  </label>
                  <select
                    id="reference"
                    name="reference"
                    className="form-control"
                    value={formData.reference}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Reference Source</option>
                    {referenceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <i className="far fa-edit"></i> Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    placeholder="Tell us more about your event and requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <i className="fab fa-whatsapp"></i> Send Enquiry via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
