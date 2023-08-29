const hre = require("hardhat");

async function main() {

  const [owner] = await ethers.getSigners();
  const rose = await hre.ethers.deployContract("RoseNFTs");
  await rose.waitForDeployment();

  const ownerBalance = await rose.balanceOf(owner.address);
  console.log(ethers.toNumber(ownerBalance));
  const address = await rose.getAddress();
  console.log("RoseNFT is deployed to: ",address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
