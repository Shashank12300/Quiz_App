// src/components/Report.js
import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Report = ({ userAnswers, correctAnswers, questions }) => {
  return (
    <div>
      <Typography variant="h2">Quiz Report</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Question</TableCell>
              <TableCell>Your Answer</TableCell>
              <TableCell>Correct Answer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questions.map((question, index) => (
              <TableRow key={index}>
                <TableCell>{question.question}</TableCell>
                <TableCell>{userAnswers[index]}</TableCell>
                <TableCell>{correctAnswers[index]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Report;
