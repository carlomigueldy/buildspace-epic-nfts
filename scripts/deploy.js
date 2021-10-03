const hre = require("hardhat");

async function main() {
  const MyEpicNFT = await hre.ethers.getContractFactory("MyEpicNFT");
  const smartContract = await MyEpicNFT.deploy();

  await smartContract.deployed();

  let txn = await smartContract.makeAnEpicNFT();
  await txn.wait();

  txn = await smartContract.makeAnEpicNFT();
  await txn.wait();

  console.log("MyEpicNFT deployed to:", smartContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
