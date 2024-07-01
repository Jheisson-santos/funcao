//https://www.dio.me/articles/o-que-sao-funcoes-javascript-e-quando-usar

const prompt = require('prompt-sync')({sigint: true})

console.log('Digite um numero: ');
let input = prompt('')

function algaritimo(input){
    let ordenar = input.split('')
    let ordem = ordenar.sort(function decre(a, b){
        return b - a
    })
    let temp = ''
    for(i = 0; i < ordem.length; i++){
        temp += ordem[i]
    }
    console.log(temp);
}
algaritimo(input)


