// Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
//     → &quot;Olá mundo bonito&quot;), usando split(), filter() e join().
function espacosremovidos(frase) {
  const palavras = frase.split(" ");
  const filtradas = palavras.filter(palavra => palavra !== "");
  const fraseFinalizada = filtradas.join(" ");
  return fraseFinalizada;
}
  const finicial = " Hoje   o dia   está        adoravel   ";
  const fcorreta = espacosremovidos(finicial); 
  console.log(fcorreta);
  