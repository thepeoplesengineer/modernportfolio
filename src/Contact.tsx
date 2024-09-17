import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Error check
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //enter form submit code here
  };

  return (
    <section>
      <h2>Let's Connect!</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputChange} 
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputChange} // Check for valid email on blur
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleInputChange} // Check for empty input on blur
            required
          />
          {errors.message && <span>{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
