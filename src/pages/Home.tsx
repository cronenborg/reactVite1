import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Welcome to My Page
        </Typography>
        <Typography variant="body1">
          Ready?
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;