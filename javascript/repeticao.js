// LAÇO DE REPETIÇÃO "FOR"
for(let contador = 1; contador <= 10; contador++) {
    console.log(contador);
}

//--------------------------------------------------
let soma = 0;
for(let i = 1; i <= 100; i++){
    soma += i;
}

console.log("Soma de 1 a 100: " + soma);

//-------------------------------------------------
//WHILE
let contador = 1;

while(contador <=10){
    console.log("Número atual: ", contador);
    contador++;
}

//DO WHILE
let numero = 1;

do{
    console.log("Número atual: ", numero);
    numero++;
} while (numero <= 10);