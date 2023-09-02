// src/App.js
import React, { useState } from 'react';
import StartPage from './components/WelcomePage/StartPage';
import QuizFetcher from './components/Fetcher/QuizFetcher';

function App() {
  const [email, setEmail] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = (userEmail) => {
    setEmail(userEmail);
    setQuizStarted(true);
  };

  return (
    <div className="App">
      {!quizStarted ? (
        <StartPage startQuiz={startQuiz} />
      ) : (
        // Render the Quiz component when the quiz starts
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <h1>Quiz in Progress for {email}</h1>
          <QuizFetcher /> {/* Render the Quiz component */}
        </div>
      )}
    </div>
  );
}

export default App;
