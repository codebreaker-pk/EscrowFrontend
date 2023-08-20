// deploy.js
// async function main() {
//     const MarketPlace = await ethers.getContractFactory("MarketPlace");
//     const contract = await MarketPlace.deploy();
//     await contract.deployed();
//     console.log("Contract deployed to address:", contract.address);
//   }
  
//   main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });
  


// // deploy.js
// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log('Deploying contracts with the account:', deployer.address);

//   const EscrowContract = await ethers.getContractFactory('EscrowContract'); // Make sure the contract name is correct here

//   const escrowcontract = await EscrowContract.deploy();
//   await escrowcontract.deployed();

//   console.log('EscrowContract contract deployed to:', escrowcontract.address);
// }

// main().then(() => process.exit(0)).catch((error) => {
//   console.error(error);
//   process.exit(1);
// });





// deploy.js
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  const EscrowContract = await ethers.getContractFactory('EscrowContract'); // Make sure the contract name is correct here

  // Replace 'SELLER_ADDRESS_HERE' and 'ARBITER_ADDRESS_HERE' with the actual addresses
  const sellerAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  const arbiterAddress = '0x2546BcD3c84621e976D8185a91A922aE77ECEc30';

  const escrowContract = await EscrowContract.deploy(sellerAddress, arbiterAddress);
  await escrowContract.deployed();

  console.log('EscrowContract deployed to address:', escrowContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

