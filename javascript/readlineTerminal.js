const readline = require('readline');
//INPUT - dados de entrada
//OUTPUT - dados de saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Seja bem-vindo ao Quiz JS!");
console.log("Responda com a letra correta: a, b ou c! \n")
let acertos = 0;


rl.question("1) Qual palavra usamos para criar uma função?\n (a)const\n (b)function\n (c)create\n>", (resposta1) => {


        if(resposta1 == 'b'){
            acertos++;
        }
    rl.question("2) Qual o prefixo de uma variável?\n (a)var\n (b)const\n (c)let\n>", (resposta2) =>{


            if(resposta2 == 'c'){
                acertos++;
            }
       
        rl.question("3) É um tipo de laço de repetição:\n (a)for\n (b)switch\n (c)arrow\n>",(resposta3) =>{


            if(resposta3 == 'a'){
                acertos++;
            }


            if(acertos == 3){
                console.log("Parabéns! Você acertou todas!")
            }else if(acertos == 2){
                 console.log("Muito bom! Você acertou 02 questões!")
            }else if(acertos == 1){
                 console.log("Ok! Estude mais!")
            }else{
                console.log("Que pena! Tente novamente!")
            }




            rl.close();
        })


    })
})


