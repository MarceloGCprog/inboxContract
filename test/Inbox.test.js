// contract test code will go here
// Necessario instalar as lib mocha, ganache e web3. Comando: npm install mocha ganache-cli web3;

const assert = require('assert'); //Lib para fazer proposicoes para teste (ao fazer tal comando, espera-se isso);
const ganache = require('ganache-cli'); // Lib para criar uma rede etherium local (para teste);
const Web3 = require('web3'); //Lib usada para acessar contratos já deployed na rede etherium. e fazer 
                                //comunicacao entre javascript e rede etherium;
                               //Web3 (W Maiusculo) porque se trata da classe. Quando usarmos(web3), será uma
                                // instancia da classe Web3.
                                // usando web3 versão 1. por ser mais nova e possuir async/await!

