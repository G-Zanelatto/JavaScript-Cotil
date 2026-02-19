//// ex 1

let celcius = 32;

console.log(`F= ${celcius * 1.8 + 32}`);
console.log(`K= ${celcius + 273.15}`);

//// ex 2

let peso = 90
let altura = 1.90

let calculoIMCpeso = peso / (altura*altura);

console.log(calculoIMCpeso.toFixed(2));

//// ex 3 

let numero = 100;

if(numero % 2 == 0) {
    console.log(`PAR`);
}

else{
    console.log(`IMPAR`);
}

//// ex 4

let n1 = 60;
let n2 = 40;
let n3 = 50;

if (n1 > n2) {
    if (n1 > n3) {
        console.log("O maior número é o primeiro: " + n1);
    } else {
        console.log("O maior número é o terceiro: " + n3);
    }
} else {
    if (n2 > n3) {
        console.log("O maior número é o segundo: " + n2);
    } else {
        console.log("O maior número é o terceiro: " + n3);
    }
};

//// ex5

let nu1 = 10;
let nu2 = 20;


let operacao = 1;

switch(operacao){
    case 1:{
        console.log(`Sua operacao de soma foi: ${nu1 + nu2}`);
    };
    case 2: {
        console.log(`Sua operacao de menos foi: ${nu1 - nu2}`);
    };
    case 3:{
        console.log(`Sua operacao de vezes foi: ${nu1 * nu2}`);
    };

    case 4: {
        console.log(`Sua operacao de dividir foi: ${nu1 / nu2}`);
    };
    default:{
        console.log("Operação Inválida");
    };
};

//// ex6

let ano;


if(ano % 4 == 0) {
    if(ano % 100 == 0){
        if(ano % 400 == 0){
            console.log("Seu ano é bissexto! ");
        }
        else{
            console.log("Seu ano não é bissexto");
        }
    }
    else{
        console.log("Seu ano não é bissexto");
    }
}
else{
    console.log(`Seu ano não é bissexto`);
}

//// ex 7