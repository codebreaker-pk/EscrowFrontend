// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { ethers } from 'ethers';
// import detectEthereumProvider from '@metamask/detect-provider';
// import EscrowContractABI from './contracts/EscrowContractABI.json'; // Replace with the path to your Escrow Contract ABI

// const App = () => {
//   const [depositAmount, setDepositAmount] = useState('');
//   const [contract, setContract] = useState(null);
//   const [walletAddress, setWalletAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(true);

//   const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with the actual contract address of your Escrow Contract

//   useEffect(() => {
//     const initializeProvider = async () => {
//       const provider = await detectEthereumProvider();

//       if (provider) {
//         const web3Provider = new ethers.providers.Web3Provider(provider);
//         const signer = web3Provider.getSigner();
//         setContract(new ethers.Contract(contractAddress, EscrowContractABI.abi, signer));
//         setWalletAddress(await signer.getAddress());
//         setIsLoading(false);
//       } else {
//         console.error('Please install MetaMask to interact with the wallet.');
//       }
//     };

//     initializeProvider();
//   }, []);

//   const depositFunds = async () => {
//     if (depositAmount && contract) {
//       try {
//         const valueInWei = ethers.utils.parseEther(depositAmount);
//         const tx = await contract.depositFunds({ value: valueInWei });
//         await tx.wait();
//         alert(`Deposited ${depositAmount} Ether into the escrow contract.`);
//         setDepositAmount('');
//       } catch (error) {
//         console.error('Error depositing funds:', error);
//       }
//     }
//   };

//   const releaseFunds = async () => {
//     if (contract) {
//       try {
//         const tx = await contract.releaseFunds();
//         await tx.wait();
//         alert('Funds released from escrow.');
//       } catch (error) {
//         console.error('Error releasing funds:', error);
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Escrow Contract Frontend</h1>
//       <p>Wallet Address: {walletAddress}</p>
//       <div>
//         <h2>Deposit Funds</h2>
//         <input
//           type="text"
//           placeholder="Amount to Deposit (Ether)"
//           value={depositAmount}
//           onChange={(e) => setDepositAmount(e.target.value)}
//         />
//         <button onClick={depositFunds}>Deposit</button>
//       </div>
//       <div>
//         <h2>Release Funds</h2>
//         <button onClick={releaseFunds}>Release Funds</button>
//       </div>
//     </div>
//   );
// };

// export default App;



// import React, { useState, useEffect } from 'react';
// import './App.css';
// import { ethers } from 'ethers';
// import detectEthereumProvider from '@metamask/detect-provider';
// import EscrowContractABI from './contracts/EscrowContractABI.json';

// const App = () => {
//   const [depositAmount, setDepositAmount] = useState('');
//   const [contract, setContract] = useState(null);
//   const [walletAddress, setWalletAddress] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [totalDeposits, setTotalDeposits] = useState(0); // New state for total deposits
//   const [totalReleased, setTotalReleased] = useState(0); // New state for total released funds

//   const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

//   useEffect(() => {
//     const initializeProvider = async () => {
//       const provider = await detectEthereumProvider();

//       if (provider) {
//         const web3Provider = new ethers.providers.Web3Provider(provider);
//         const signer = web3Provider.getSigner();
//         setContract(new ethers.Contract(contractAddress, EscrowContractABI.abi, signer));
//         setWalletAddress(await signer.getAddress());
//         setIsLoading(false);
//       } else {
//         console.error('Please install MetaMask to interact with the wallet.');
//       }
//     };

//     initializeProvider();
//   }, []);

//   const depositFunds = async () => {
//     if (depositAmount && contract) {
//       try {
//         const valueInWei = ethers.utils.parseEther(depositAmount);
//         const tx = await contract.depositFunds({ value: valueInWei });
//         await tx.wait();
//         alert(`Deposited ${depositAmount} Ether into the escrow contract.`);
//         setDepositAmount('');
//         setTotalDeposits((prevTotal) => prevTotal + parseFloat(depositAmount));
//       } catch (error) {
//         console.error('Error depositing funds:', error);
//       }
//     }
//   };

//   const releaseFunds = async () => {
//     if (contract) {
//       try {
//         const tx = await contract.releaseFunds();
//         await tx.wait();
//         alert('Funds released from escrow.');
//         // Update total released funds
//         setTotalReleased((prevTotal) => prevTotal + totalDeposits);
//         // Reset total deposits to 0 after release
//         setTotalDeposits(0);
//       } catch (error) {
//         console.error('Error releasing funds:', error);
//       }
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Escrow Contract Frontend</h1>
//       <p>Wallet Address: {walletAddress}</p>
//       <div>
//         <h2>Deposit Funds</h2>
//         <input
//           type="text"
//           placeholder="Amount to Deposit (Ether)"
//           value={depositAmount}
//           onChange={(e) => setDepositAmount(e.target.value)}
//         />
//         <button onClick={depositFunds}>Deposit</button>
//       </div>
//       <div>
//         <h2>Release Funds</h2>
//         <button onClick={releaseFunds}>Release Funds</button>
//       </div>
//       <div>
//         <h2>Total Deposits</h2>
//         <p>{totalDeposits} Ether</p>
//       </div>
//       <div>
//         <h2>Total Released Funds</h2>
//         <p>{totalReleased} Ether</p>
//       </div>
//     </div>
//   );
// };

// export default App;





import React, { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import EscrowContractABI from './contracts/EscrowContractABI.json';

const App = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [contract, setContract] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [totalDeposits, setTotalDeposits] = useState(0); // New state for total deposits
  const [totalReleased, setTotalReleased] = useState(0); // New state for total released funds

  const contractAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

  useEffect(() => {
    const initializeProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3Provider = new ethers.providers.Web3Provider(provider);
        const signer = web3Provider.getSigner();
        setContract(new ethers.Contract(contractAddress, EscrowContractABI.abi, signer));
        setWalletAddress(await signer.getAddress());
        setIsLoading(false);
      } else {
        console.error('Please install MetaMask to interact with the wallet.');
      }
    };

    initializeProvider();
  }, []);

  const depositFunds = async () => {
    if (depositAmount && contract) {
      try {
        const valueInWei = ethers.utils.parseEther(depositAmount);
        const tx = await contract.depositFunds({ value: valueInWei });
        await tx.wait();
        alert(`Deposited ${depositAmount} Ether into the escrow contract.`);
        setDepositAmount('');
        setTotalDeposits((prevTotal) => prevTotal + parseFloat(depositAmount));
      } catch (error) {
        console.error('Error depositing funds:', error);
      }
    }
  };

  const releaseFunds = async () => {
    if (contract) {
      try {
        const tx = await contract.releaseFunds();
        await tx.wait();
        alert('Funds released from escrow.');
        // Update total released funds
        setTotalReleased((prevTotal) => prevTotal + totalDeposits);
        // Reset total deposits to 0 after release
        setTotalDeposits(0);
      } catch (error) {
        console.error('Error releasing funds:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Escrow Contract Frontend</h1>
      <p>Wallet Address: {walletAddress}</p>
      <div>
        <h2>Deposit Funds</h2>
        <input
          type="text"
          placeholder="Amount to Deposit (Ether)"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button onClick={depositFunds}>Deposit</button>
      </div>
      <div>
        <h2>Release Funds</h2>
        <button onClick={releaseFunds}>Release Funds</button>
      </div>
      <div>
        <h2>Total Deposits</h2>
        <p>{totalDeposits} Ether</p>
      </div>
      <div>
        <h2>Total Released Funds</h2>
        <p>{totalReleased} Ether</p>
      </div>
    </div>
  );
};

const releaseFunds = async () => {
  if (contract) {
    try {
      const tx = await contract.releaseFunds();
      await tx.wait();
      alert('Funds released from escrow.');
    } catch (error) {
      console.error('Error releasing funds:', error);
    }
  }
};


export default App;
