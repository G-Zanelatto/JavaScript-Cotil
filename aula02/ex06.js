const readlineSync = require('readline-sync'); 
let nome = readlineSync.question('Digite seu nome: '); 

const exibirNome = function() {
    console.log(nome);
};

exibirNome();
