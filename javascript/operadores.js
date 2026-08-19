// OPERADORES LÓGICOS
//== != > < >= <= ===

let idade = 20;
console.log(idade >= 18);

//OPERADORES ARITMETICOS
let valorCompra = 35.90;
let valorPago = 50;
let troco = valorPago - valorCompra;

console.log("Troco a ser devolvido: R$" + troco + ",00" );

//OPERAÇÃO COMPOSTA
let numero1 = 4;
let numero2 = 4;

console.log(
    numero1 % 2 === 0 &&
    numero2 % 2 === 0 &&
    numero1 === numero2
)

