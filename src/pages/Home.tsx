import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import './Home.css';


const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="main-content">
        <h2>Welcome to WebAgency</h2>
        <p>Explore our services and get in touch to start your project today!</p>
      </div>
    </div>
  );
};

export default Home;