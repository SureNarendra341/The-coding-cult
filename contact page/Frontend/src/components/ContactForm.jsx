// import React from 'react';
// import '../styles/Contact.css';

// const ContactForm = () => {
//   return (
//     <form className="contact-form">
//       <div className="input-row">
//         <input type="text" placeholder="Name" />
//         <input type="text" placeholder="Phone" />
//       </div>
//       <input type="email" placeholder="Email address" />
//       <textarea placeholder="Message"></textarea>
//       <button type="submit">CONTACT US</button>
//     </form>
//   );
// };

// export default ContactForm;



import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to send message.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">CONTACT US</button>
    </form>
  );
};

export default ContactForm;
