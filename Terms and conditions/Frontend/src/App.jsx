import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';

function App() {
  const [title, setTitle] = useState('Terms and Conditions');

  return (
    <Routes>
      <Route path="/" element={<Home title={title} />} />
      <Route path="/terms" element={<Terms title={title} setTitle={setTitle} />} />
    </Routes>
  );
}

export default App;
