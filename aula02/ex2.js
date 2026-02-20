const readline = require('readline-sync');

let senha;

do {
    let senha = readline.question("Digite a senha: ");
   
    if(senha != "Jorginho123"){
        console.log("Senha incorreta!\nTente novamente");
    }
}while(senha == "Jorginho123");
