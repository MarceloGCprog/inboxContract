// compile code will go here

//BIBLIOTECAS

const path = require('path'); // Garante que o caminho sera feito independente do sistema operacional.

const fs = require('fs');   //fs = fileSystem e sera usado para ler o arquivo inbox.sol direto no disco 
                            //(por nao ser arquivo js, nao pode ser chamado diretamente pela linguagem!!)

const compiladorSolicity = require('solc'); // lembrando que foi feito o download no compilador com o comando 
                                            //npm install solc@0.4.17 e definido o uso de compilador de 
                                            //nodelocal no commandpallet;

//CODIGO
const inboxPath = path.resolve(__dirname,'contracts','inbox.sol'); // caminho para o inbox.sol. __dirname eh o diretorio    
                                                                    //raiz da pasta que estamos.

const source = fs.readFileSync(inboxPath,'utf8');   // a variavel vai ler o arquivo do caminho especificado 
                                                    //e com o encouding especificado (caminho, encoding);

const inboxCompilado = compiladorSolicity.compile(source,1); //Define-se a fonte e o numero 
                                                            //de contratos para compilacao. No caso, 1.

module.exports = inboxCompilado.contracts[':Inbox']; //module.exports permite que outros arquivos acessem as informa-
                                                    //coes contidas nessa variavel. A parte do contracts[':Inbox']
                                                    // por se tratar de um json permite acessar apenas a parte que
                                                    //interessa(bytecode e ABI) do arquivo inboxCompilado.

