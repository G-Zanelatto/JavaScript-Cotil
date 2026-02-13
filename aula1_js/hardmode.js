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

let numero = 100

if(numero % 0) {
    console.log(`PAR`);
}

else{
    console.log(`IMPAR`);
}