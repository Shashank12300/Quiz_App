import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const StartPage = ({ startQuiz }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startQuiz(email);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Quiz App!
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
            margin="normal"
          />
          <Button variant="contained" type="submit" fullWidth color="primary">
            Start Quiz
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default StartPage;
