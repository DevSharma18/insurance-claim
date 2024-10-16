import React, { useState } from 'react';
import { verifyClaim } from '../utils/contract';

function VerifyClaim() {
  const [claimId, setClaimId] = useState('');

  const handleVerify = async () => {
    await verifyClaim(claimId);
    setClaimId('');
  };

  return (
    <div className="claim-section">
      <h3>Verify a Claim</h3>
      <input
        type="number"
        placeholder="Enter Claim ID"
        value={claimId}
        onChange={(e) => setClaimId(e.target.value)}
      />
      <button onClick={handleVerify}>Verify Claim</button>
    </div>
  );
}

export default VerifyClaim;
