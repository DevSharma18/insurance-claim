import React, { useState } from 'react';
import { submitClaim } from '../utils/contract';

function SubmitClaim() {
  const [claimDetails, setClaimDetails] = useState('');
  const [claimAmount, setClaimAmount] = useState('');

  const handleSubmit = async () => {
    await submitClaim(claimDetails, claimAmount);
    setClaimDetails('');
    setClaimAmount('');
  };

  return (
    <div className="claim-section" data-cursor-interactive="true" data-cursor-tooltip="Submit your claim">
      <h3>Submit a Claim</h3>
      <input
        type="text"
        placeholder="Enter Claim Details"
        value={claimDetails}
        onChange={(e) => setClaimDetails(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Claim Amount (in Wei)"
        value={claimAmount}
        onChange={(e) => setClaimAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Claim</button>
    </div>
  );
}

export default SubmitClaim;
