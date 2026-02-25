const readline = require('readline-sync');

let usuarios = [];

let continua = "S";

while(continua == "S"){
   const nome = readline.question('Qual eh o seu nome?');

   const idade = parseInt(readline.question('Qual eh a sua idade?'));

   const usuario = {
    nome: nome,
    idade: idade 
};

   usuarios.push(usuario);

   continua = readline.question('Voce quer continuar? S/n');
};

console.log(usuarios);

