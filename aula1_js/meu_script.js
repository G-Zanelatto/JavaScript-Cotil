console.log("VS Code configurado");

let nome = "Vitor";
let atributo = "Feio";


console.log(`O ${nome} é muito ${atributo}`);

let num1 = "12";
let num2 = 2026;

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

console.log(num1 + num2);

console.log(parseInt(num1) + num2);

//////



let senhaDigitada = readline.question('Digite sua senha: ');

if (senhaDigitada == "1234") {
    console.log("Acesso Permitido");
}else if(senhaDigitada == "admin") {
    console.log("Acesso admin");
}else{
    console.log("Acesso Negado");
}