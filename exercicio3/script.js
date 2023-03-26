//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar 
// o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function somar(n1, n2) {

 
    return n1 + n2;
 
 }

 function subtrair(n1, n2) {
 
    return n1 - n2;
 
 }

 function multiplicar(n1, n2) {
 
    return n1 * n2;
 
 }

 function dividir(n1, n2) {
 
    return n1 / n2;
 
 }

 // b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

 const receber1 = Number(prompt("Digite um numero"));
 const receber2 = Number(prompt("Digite um numero"));

 // c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

 // d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

 console.log("A soma é", somar(receber1, receber2))
 console.log("A subtração é", subtrair(receber1, receber2))
 console.log("A multiplicação é", multiplicar(receber1, receber2))
 console.log("A divisão é", dividir(receber1, receber2))