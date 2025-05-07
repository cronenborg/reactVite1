import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Hero.css'; 

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
        color: 'white',
        textAlign: 'center',
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Build Your Dream Website
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px' }}>
        We create stunning, responsive, and professional websites tailored to your needs.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '12px 24px',
          fontSize: '1rem',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: '#45a049',
          },
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;