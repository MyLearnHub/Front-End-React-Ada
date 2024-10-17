// Definição da função
function saudacao(nomeDoEstudante, curso = "Front-End em React") {
  // template string || template literals
  return `Olá, ${nomeDoEstudante}! Seja bem vinda(o) ao curso de ${curso}!`;
}

const mensagemDaSaudacao = saudacao("Paulo", "Back-end em Node.js"); // chamada da função saudacao

console.log(mensagemDaSaudacao);

// * Exemplo 2

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(2, 3);

console.log(resultado);
console.log(resultado / 10);

// ----------------------------
// FUNÇÕES ANÔNIMAS

const dobroNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroNumero(2);
console.log(dobro);

// ----------------------------
// ARROW FUNCTIONS: Função Seta

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const triploDoNumero = (numero) => numero * 3;
