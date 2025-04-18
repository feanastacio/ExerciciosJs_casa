// Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
// map(), toUpperCase() e slice().
// .shift() => Remove no inicio
// .map() => Definição: Método usado em arrays que permite transformar 
// elementos do array original em novos valores, criando um novo array, 
// sem modificar o oriinal.

var prompt = require('prompt-sync')();
const frase = prompt("Digite uma frase:");

const palavras = frase.split(" ");

const filtradas = palavras.filter(palavras => palavras.startsWith(letra));
console.log(`A quantidade de palavras que se iniciam com a letra: "${letra}" são: ${filtradas.length}`);