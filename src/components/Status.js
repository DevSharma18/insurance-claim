import React, { useState, useEffect } from 'react';

function Status() {
  const [statusMessage, setStatusMessage] = useState('Not connected');

  useEffect(() => {
    setStatusMessage('Ready to interact with the contract');
  }, []);

  return (
    <div className="status">
      <h4>Status: {statusMessage}</h4>
    </div>
  );
}

export default Status;
