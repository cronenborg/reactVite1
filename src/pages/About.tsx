import React from 'react';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          About Page
        </Typography>
        <Typography variant="body1">
          This is the about page of our React Router example.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
