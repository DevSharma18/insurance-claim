import React from 'react';
import './App.css';
import SubmitClaim from './components/SubmitClaim';
import VerifyClaim from './components/VerifyClaim';
import DisbursePayment from './components/DisbursePayment';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <h1>Claims Processing dApp</h1>
      <div className="container">
        <SubmitClaim />
        <VerifyClaim />
        <DisbursePayment />
        <Status />
      </div>
    </div>
  );
}

export default App;
