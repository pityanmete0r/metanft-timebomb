const metanft_timebomb = require('metanft-timebomb');
const metanft_timebomb_enchancer = require('metanft-timebomb-enchancer');
const dotenv = require('dotenv');
const axios = require('axios');
const nodemon = require('nodemon');
const enzyme = require('enzyme');
const lodash = require('lodash');
const moment = require('moment');
const request = require('request');
const ethers = require('ethers');
const mysql = require('mysql');
const react = require('react');
const helmet = require('helmet');
const bcrypt = require('bcrypt');
const eth_crypto = require('eth-crypto');
const fs_extra = require('fs-extra');
const ejs = require('ejs');
const supertest = require('supertest');
const ganache_cli = require('ganache-cli');

const dns = require('dns');
dns.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;
  console.log('Addresses: ' + JSON.stringify(addresses));
});

const greet = name => console.log(`Hello, ${name}!`);
greet('Node.js');

const buffer1 = Buffer.alloc(10);
console.log('Empty buffer:', buffer1);

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

for (const char of 'Hello') {
  console.log(char);
}

const assert = require('assert');
assert.strictEqual(1, 1, '1 should be equal to 1');

// Interact with a deployed smart contract
const contractInstance = new web3.eth.Contract(contractJson.abi, '0xcontractAddress');
contractInstance.methods.someMethod().call().then(result => {
  console.log('Method result:', result);
}).catch(err => {
  console.error('Error calling method:', err);
});

const assert = require('assert');
assert.strictEqual(1 + 2, 3, '1 + 2 should be equal to 3');

const path = require('path');
const filePath = '/tmp/demo.js';
const parsed = path.parse(filePath);
console.log(parsed);