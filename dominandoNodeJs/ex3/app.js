const readline = require('readline-sync');

let usuarios = [];

let quant = parseInt(readline.question("Quantos usuarios voce quer cadastrar:  "));

    while(isNaN(quant)){
        console.log("O número digitado é inválido\n");
        quant = parseInt(readline.question('Digite novamente: '));

    };


    for(let i = 0; i < quant; i++){
        const nome = readline.question('Qual eh o seu nome? :');

        const idade = parseInt(readline.question('Qual eh a sua idade? :'));

        const usuario = {
            nome: nome,
            idade: idade 
        };


        usuarios.push(usuario);

    };

 
console.log(usuarios);

