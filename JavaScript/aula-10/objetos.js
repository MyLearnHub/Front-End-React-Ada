// Object Literal

const array = ["Paulo", 27, 1.77, true];

const pessoa = {
  nome: "Paulo",
  idade: 20,
  altura: 1.75,
  ehProgramador: true,
  hobbies: ["Jogar FIFA", "Academia", "Ler"],
  imprimirAlgo: () => {
    console.log("Opa!");
  },
};

console.log(pessoa);
console.clear();

console.log(pessoa.nome);
console.log(pessoa.hobbies);
console.log(pessoa["idade"]);

pessoa.profissao = "Desenvolvedor";

pessoa.nome = "Paulo Alvares";

console.log(pessoa);

delete pessoa.altura;

console.log(pessoa);

console.clear();

pessoa.imprimirAlgo();

const idade = 27;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};

console.log(objeto);
console.clear();

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
console.log(pessoa);
