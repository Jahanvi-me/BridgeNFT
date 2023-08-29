require('dotenv').config()

const nftAddress = "0xE13e36B3a4AcFB736e9FA7E1DC92f319D9eC7918"; //contract address

async function main() {

    const [signer] = await ethers.getSigners();
    signerAddress = signer.address;
    const NFTContract = await ethers.getContractFactory("RoseNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);
    
    // Call the mint function on the contract to mint 40 nfts
    const tx = await nftcontract.Batchmint(signerAddress,40);
    await tx.wait()

    // Log a message to the console to indicate that the nfts have been minted
    console.log("Minted 40 nfts to: ",signerAddress);

    const balance = await nftcontract.balanceOf(signerAddress);
    console.log("You now have: " + balance + " nfts");
  }

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });