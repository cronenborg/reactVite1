import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#ff6f61' }}>
        404
      </Typography>
      <Typography variant="h4" component="h2" sx={{ marginBottom: 2 }}>
        Oops! You seem lost.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        The page you’re looking for doesn’t exist. Maybe it’s hiding in the multiverse?
      </Typography>
      <Box
        component="img"
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="404"
        sx={{ width: '300px', marginBottom: 4 }}
      />
      <Button variant="contained" color="primary" component={Link} to="/" sx={{ paddingX: 4 }}>
        Take Me Home
      </Button>
    </Box>
  );
};

export default NotFound;