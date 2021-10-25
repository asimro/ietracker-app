import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract/ABI";

export const loadBlockChain = async () => {
    try {
        if (Web3.givenProvider) {

            //Enabling web3 injecter in browser
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            console.log("Web3 provider", web3)

            //getting account address from metamask 
            const accounts = await web3.eth.getAccounts();
            console.log("Account", accounts);

            //getting contract address and ABI from given file
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log('Contract ', contract);
            console.log('Contract methods', contract.methods);

            //transactions reading  
            const getTransaction = await contract.methods.rateBuy().call();
            console.log('get transaction from contract ', getTransaction);

            //transation calling / invoking
            const sendTransaction = await contract.methods.setRate(555).send({ from: accounts[0] });
            console.log('sendTransaction', sendTransaction);
        }

    }
    catch (error) {
        console.log('Web3 Error', error)
    }
}