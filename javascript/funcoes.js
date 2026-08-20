//FUNÇÃO QUE EXECUTE UMA SAUDAÇÃO PARA O USUÁRIO
function saudacao(nome){
    console.log("Olá, ", nome);
}

saudacao ("Camis");//Camis---> Argumento
saudacao("Suelen");
saudacao("Arthur");

//----------------------------------------------

function calcularDobroValor(numero){
    return numero * 2;
}

const numeroDobrado = calcularDobroValor(4)
console.log("O dobro de 4 é: ", numeroDobrado);