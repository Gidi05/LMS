import React from 'react';
import { Container, Typography, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src="/lms-logo.svg" alt="LMS Logo" style={{ width: 80, height: 80, marginBottom: 24 }} />
        <Typography component="h1" variant="h4" gutterBottom>
          Welcome to LMS Dashboard
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have successfully logged in to the Learning Management System.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
          sx={{ mt: 3 }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
};

export default Dashboard;