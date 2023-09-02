import React from 'react';
import { List, ListItem, Button } from '@mui/material';

const QuestionOverview = ({ questions, visitedQuestions, attemptedQuestions, navigateToQuestion }) => {
  return (
    <div>
      <h3>Question Overview</h3>
      <List>
        {questions.map((question, index) => (
          <ListItem key={index}>
            <Button
              variant="outlined"
              onClick={() => navigateToQuestion(index)}
              className={`${visitedQuestions.includes(index) ? 'visited' : 'not-visited'
                } ${attemptedQuestions.includes(index) ? 'attempted' : 'not-attempted'
                }`}
            >
              {`Question ${index + 1}`}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default QuestionOverview;
