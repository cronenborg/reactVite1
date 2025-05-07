import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is the about page of our React Router example.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/contact">Go to Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
