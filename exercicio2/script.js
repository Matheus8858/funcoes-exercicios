//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

function somar(n1, n2) {

   const soma = n1 + n2

   return soma;

}
const n1 = Number(prompt("Digite um número"));
const n2 = Number(prompt("Digite outro número"));
const reposta = somar(n1,n2);
console.log("A soma é",reposta);

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function verificarMaiorOuIgual(numero1,numero2){

    const verificacao = numero1 >= numero2;

    return verificacao;
}

const numero1 = Number(prompt("Digite um numero"));
const numero2 = Number(prompt("Digite outro numero"));
const verifica = verificarMaiorOuIgual(numero1,numero2)
console.log("O numero é maior ou igual?",verifica)

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function parOuImpar(numero) {

    const imparOuPar = numero % 2 === 0;

    return imparOuPar;

}

const numeroParOuImpar = Number(prompt("Digite um número"));
console.log("O número é par:",parOuImpar(numeroParOuImpar));

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salario(salarioBruto) {

    const salarioLiquido = salarioBruto - salarioBruto * 0.1;

    return salarioLiquido;
}

const salarioLiquido = Number(prompt("Digite o seu salário"));
console.log("O salário liquido é", salario(salarioLiquido))
