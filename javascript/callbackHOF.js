function calcular(numero1, numero2, operacao){
    return operacao (numero1, numero2);
}

function soma(num1, num2){
    return num1 + num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

const resultadoSoma = calcular(15, 180, soma);
console.log("Resultado da soma: ", resultadoSoma);

const resultadoDivisao = calcular(15, 8, divisao);
console.log("Resultado da divisão: ", resultadoDivisao);

const resultadoMultiplicar = calcular(15, 100, multiplicar);
console.log("Resultado da divisão: ", resultadoMultiplicar);

const resultadoSubtracao = calcular(499, 807, subtracao);
console.log("Resultado da divisão: ", resultadoSubtracao);