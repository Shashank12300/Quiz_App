// src/components/QuizFetcher.js
import React, { useEffect, useState } from 'react';
import { CircularProgress, Container, Typography } from '@mui/material';
import axios from 'axios';
import Quiz from '../Quiz/Quiz'; // Import the Quiz component

const QuizFetcher = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=15')
      .then((response) => {
        const questions = response.data.results.map((result) => {
          const choices = [...result.incorrect_answers, result.correct_answer];
          return {
            question: result.question,
            choices: choices,
            correctAnswer: result.correct_answer,
          };
        });
        setQuizData(questions);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quiz data:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        {loading ? 'Loading quiz questions...' : 'Quiz Questions'}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Quiz questions={quizData} />
      )}
    </Container>
  );
};

export default QuizFetcher;
