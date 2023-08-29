const nftAddress = "0x53618D43e6b28f33eF43f1985E8E9EeF76f88C5D"; // contract address

async function main() {

    const [signer] = await ethers.getSigners();
    const NFTContract = await ethers.getContractFactory("RoseNFTs");
    const nftcontract = await NFTContract.attach(nftAddress);

    console.log("You now have: " + await nftcontract.balanceOf(signer.address) + " nfts");
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});