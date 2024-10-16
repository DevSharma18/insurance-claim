import React, { useState } from 'react';
import { disbursePayment } from '../utils/contract';

function DisbursePayment() {
  const [claimId, setClaimId] = useState('');

  const handleDisburse = async () => {
    await disbursePayment(claimId);
    setClaimId('');
  };

  return (
    <div className="claim-section">
      <h3>Disburse Payment</h3>
      <input
        type="number"
        placeholder="Enter Claim ID"
        value={claimId}
        onChange={(e) => setClaimId(e.target.value)}
      />
      <button onClick={handleDisburse}>Disburse Payment</button>
    </div>
  );
}

export default DisbursePayment;
