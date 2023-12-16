import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';

async function main() {
  let provider = new ethers.BrowserProvider(window.ethereum)
  const contractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
  let account = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
  const result = await contract.totalSupply();
  await contract.safeMint('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', 'https://ipfs.io/ipfs/QmZ4tj')
  console.log(result.toString());
}


export default main;