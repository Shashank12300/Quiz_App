// src/components/Quiz.js
// const questions = [
//     {
//         id: 1,
//         question: 'Which function is used to serialize an object into a JSON string in Javascript?',
//         choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
//         type: 'MCQs',
//         correctAnswer: 'stringify()',
//     },
//     {
//         id: 2,
//         question: 'Which of the following keywords is used to define a variable in Javascript?',
//         choices: ['var', 'let', 'var and let', 'None of the above'],
//         type: 'MCQs',
//         correctAnswer: 'var and let',
//     },
//     {
//         id: 3,
//         question:
//             'Which of the following methods can be used to display data in some form using Javascript?',
//         choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
//         type: 'MCQs',
//         correctAnswer: 'All of the above',
//     },
//     {
//         id: 4,
//         question: 'How can a datatype be declared to be a constant type?',
//         choices: ['const', 'var', 'let', 'constant'],
//         type: 'MCQs',
//         correctAnswer: 'const',
//     },
// ];
import React, { useState } from 'react';
import {
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  CircularProgress,
} from '@mui/material';
import Timer from '../Timer/Timer';
import QuestionOverview from '../QuestionOverview/QuestionOverview';
import Report from '../Report/Report';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [visitedQuestions, setVisitedQuestions] = useState([]);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [isQuizOver, setIsQuizOver] = useState(false);

  const navigateToQuestion = (index) => {
    setCurrentQuestionIndex(index);
    if (!visitedQuestions.includes(index)) {
      setVisitedQuestions([...visitedQuestions, index]);
    }
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    if (attemptedQuestions.includes(currentQuestionIndex)) {
      const confirmMove = window.confirm("You have already attempted this question. Are you sure you want to move to another question?");
      if (!confirmMove) {
        return;
      }
    }
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Finished! Your Score: ${score} out of ${questions.length}`);
    }

    if (!attemptedQuestions.includes(currentQuestionIndex)) {
      setAttemptedQuestions([...attemptedQuestions, currentQuestionIndex]);
    }

    userAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers([...userAnswers]);

    if (currentQuestionIndex < questions.length - 1) {
      navigateToQuestion(currentQuestionIndex + 1);
    }
  };

  const handleTimeout = () => {
    alert('Quiz time is up! Submitting your quiz.');
    setIsQuizOver(true);
  };

  return (
    <Container>
      {isQuizOver ? (
        <Report
          userAnswers={userAnswers}
          correctAnswers={questions.map((q) => q.correctAnswer)}
          questions={questions}
        />
      ) : (
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Timer onTimeout={handleTimeout} />
          <Typography variant="h5">Question {currentQuestionIndex + 1}</Typography>
          <Typography>{questions[currentQuestionIndex].question}</Typography>
          <List>
            {questions[currentQuestionIndex].choices.map((option, index) => (
              <ListItem key={index}>
                <Button
                  variant="outlined"
                  onClick={() => handleAnswerSubmit(option)}
                >
                  {option}
                </Button>
              </ListItem>
            ))}
          </List>
          <QuestionOverview
            questions={questions}
            visitedQuestions={visitedQuestions}
            attemptedQuestions={attemptedQuestions}
            navigateToQuestion={navigateToQuestion}
          />
        </Paper>
      )}
    </Container>
  );
};

export default Quiz;
