const readline = require('readline-sync');

let usuarios = [];

let option;


while(option !=5) {
    console.log("💻 Mini Projeto: Sistema de Cadastro com Menu");
    console.log("Escolha uma das opcoes abaixo : ");
    console.log("1️⃣ Cadastrar usuario");
    console.log("2️⃣ Listar usuarios");
    console.log("3️⃣ Buscar usuario pelo nome");
    console.log("4️⃣ Mostrar media de idade");
    console.log("5️⃣ Sair");

    let option = parseInt(readline.question("Escolha uma das opcoes: "));

     while(isNaN(option)){
        console.log("O numero digitado é invalido\n");
        option = parseInt(readline.question('Digite novamente: '));

    };

    switch(option){
        case 1:
            let quant = parseInt(readline.question("Quantos usuarios voce quer cadastrar:  "));

              for(let i = 0; i < quant; i++){
                const nome = readline.question('Qual eh o seu nome? :');

                const idade = parseInt(readline.question('Qual eh a sua idade? :'));

                const usuario = {
                    nome: nome,
                    idade: idade 
                };
        
                 usuarios.push(usuario);
                
                };

                break;

        case 2:
            console.log(usuarios);

            break;
        case 3: 
            let nome = toLowerCase(readline.question("Digite o nome do usuario: "));
            
            for(let i = 0; i < usuarios.length; i++){
                let encontrado = false;
                if(usuarios[i].nome === nome){
                    encontrado = true;
                    console.log(usuarios[i].nome)
                }
            }

                    

};

};