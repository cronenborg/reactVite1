import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          <li>
            <Link to="/about">Go to About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;
