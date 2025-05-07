import React from 'react';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="lg">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Feel free to reach out to us by filling out the form below.
        </Typography>
        <Box
          component="form"
          sx={{
            maxWidth: 600,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ alignSelf: 'center', paddingX: 4 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;