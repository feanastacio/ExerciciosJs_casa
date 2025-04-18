// Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
// objeto como contador.

var prompt = require('prompt-sync')(); // Isso permite a entrada de dados no codigo
const frase = prompt("Digite uma frase:"); // Pede pro usuário colocar informações

function palavrasqueserepetem (frase) { 
    const palavra = frase.split(" "); // Serve para separar as palavras da frase  
    const contador = {}; // Vai servir para contar as palavras repetidas
        for (const palavras of palavra) {
            contador[palavras] = (contador [palavras] || 0) + 1;
        }
        let repetidas = "";
        let contadorpalavras = 0;
        for (const palavra in contador) {
            if (contador[palavra] > contadorpalavras) {
                contadorpalavras = contador[palavra];
                repetidas = palavra;
            }   
        }    
    return `A palavra que mais se repete é "${repetidas}"(${contadorpalavras})`; // Vai retornar a palavra que repete mais com a qntd 
}
console.log(palavrasqueserepetem(frase));