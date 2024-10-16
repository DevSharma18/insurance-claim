import web3 from './web3';

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const contractABI = [
  // Paste your contract ABI here
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

export const submitClaim = async (details, amount) => {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.submitClaim(details, amount).send({ from: accounts[0] });
};

export const verifyClaim = async (claimId) => {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.verifyClaim(claimId).send({ from: accounts[0] });
};

export const disbursePayment = async (claimId) => {
  const accounts = await web3.eth.getAccounts();
  return contract.methods.disbursePayment(claimId).send({ from: accounts[0] });
};
