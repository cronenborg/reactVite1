import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        marginBottom: '20px',
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
      Gianpaolo Papa
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.4rem', marginBottom: '30px', maxWidth: '600px' }}>
      Technical Lead | Engineering Manager | Cloud Architect
      </Typography>
      <Typography sx={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '600px', color: '#333' }}>
        Results-driven leader with 24 years of experience specializing in JavaScript applications
        within AWS cloud environments.<br />
        Delivering scalable, secure, and user-centric applications
        for large communities and high load.
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