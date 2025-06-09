import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Home = ({ title }) => {
  return (
    <div className="page-container home-page">
      <div className="bottom-link">
        <Link to="/terms" className="goto-terms">{title}</Link>
      </div>
    </div>
  );
};

export default Home;