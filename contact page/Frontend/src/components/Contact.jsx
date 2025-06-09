import React, { useRef, useEffect } from 'react';
import '../styles/Contact.css';
import ContactForm from './ContactForm';
import EditableInfo from './EditableInfo';

const Contact = ({ title, setTitle }) => {
  const titleRef = useRef(null);

  // const handleInput = () => {
  //   const newTitle = titleRef.current.innerText;
  //   setTitle(newTitle);
  // };

  const handleInput = () => {
  const newTitle = titleRef.current.innerText;
  setTitle(newTitle);

  // Send update to backend
  fetch('http://localhost:8080/api/contact-info/title', {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: newTitle }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update title');
      }
      return response.json();
    })
    .then(data => {
      console.log('Title updated successfully:', data);
    })
    .catch(error => {
      console.error('Error updating title:', error);
    });
};


  // // Set initial value once
  // useEffect(() => {
  //   if (titleRef.current && title) {
  //     titleRef.current.innerText = title;
  //   }
  // }, []);

  useEffect(() => {
  fetch('http://localhost:8080/api/contact-info')
    .then(response => response.json())
    .then(data => {
      if (titleRef.current && data.title) {
        titleRef.current.innerText = data.title;
        setTitle(data.title);
      }
    })
    .catch(error => {
      console.error('Failed to fetch contact title:', error);
    });
}, []);


  return (
    <section id="contact" className="contact-section">
      <div className="contact-title-wrapper">
        <h1
          className="contact-title-editable"
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          ref={titleRef}
        />
      </div>
      <div className="contact-container">
        <EditableInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;