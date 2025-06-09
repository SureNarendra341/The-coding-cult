import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import './styles/Responsive.css';

function App() {
  const [title, setTitle] = useState('CONTACT');

  return (
    <div>
      <Navbar title={title} />
      <Contact title={title} setTitle={setTitle} />
    </div>
  );
}

export default App;