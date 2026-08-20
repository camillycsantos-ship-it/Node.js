const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Seja bem-vindo ao Quiz de Matemática!");
console.log("Responda com a letra correta: a, b ou c! \n")
let acertos = 0;


rl.question("1) Quanto é 25 + 25?\n (a)50\n (b)25\n (c)80\n>", (resposta1) => {


        if(resposta1 == 'a'){
            acertos++;
        }
    rl.question("2) Qual número que multiplicado por ele da ele mesmo??\n (a)1\n (b)2\n (c)5\n>", (resposta2) =>{


            if(resposta2 == 'a'){
                acertos++;
            }
       
        rl.question("3) Qual o sinal da operação usada para somar dois números?:\n (a)-\n (b)+\n (c)/\n>",(resposta3) =>{


            if(resposta3 == 'b'){
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


