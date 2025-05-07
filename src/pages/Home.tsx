import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to our React Router example!</p>
      <nav>
        <ul>
          <li>
            <Link to="/about">Go to About</Link>
          </li>
          <li>
            <Link to="/contact">Go to Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
