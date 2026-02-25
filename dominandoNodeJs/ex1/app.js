const readline = require('readline-sync');

let usuarios = [];

const nome = readline.question('Qual eh o seu nome?');

const idade = parseInt(readline.question('Qual eh a sua idade?'));


const usuario = {
    nome: nome,
    idade: idade 
};


usuarios.push(usuario);

console.log(usuarios);


