// Array.prototype.every(): verificar se todos os elementos de um array seguem uma determinada
//                          condição retornada pela função

const numeros = [40, 34, 67, 89, 23, 16, 10];
const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 34,
    altura: 1.77,
  },
  {
    nome: "Pessoa 2",
    idade: 25,
    altura: 1.56,
  },
  {
    nome: "Pessoa 3",
    idade: 46,
    altura: 1.82,
  },
];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

console.log(todosMaioresDeIdade);

// Array.prototype.some(): verificar se algum elemento do array torna verdadeira uma determinada
//                         condição retornada pela função

const numeros2 = [-1, 3, 7, -3, 5];

const retorno = numeros2.some((numero) => numero > 0);

console.log(retorno);
