// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();
const frase = prompt("Digite uma frase:");
const letra = prompt("Digite uma letra:");

const palavras = frase.split(" ");

const filtradas = palavras.filter(palavras => palavras.startsWith(letra));
console.log(`A quantidade de palavras que se iniciam com a letra: "${letra}" são: ${filtradas.length}`);
