const {Blockchain, Transactions} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('9b15d8d9f7b3e6a33ff36818e332e38b795ed30a6dce4a9719c14c088f1bc7ec');
const myWalletAddress = myKey.getPublic('hex');


let FriBlockchain = new Blockchain();

const tx1 = new Transactions(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
FriBlockchain.addTransaction(tx1);


console.log('\n Starting the miner...');
FriBlockchain.minePendingTransactions(myWalletAddress);

console.log('\nBalance of school is', FriBlockchain.getBalanceOfAddress(myWalletAddress));


console.log('Is chain valid?', FriBlockchain.isChainValid());