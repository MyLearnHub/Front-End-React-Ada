// Utilize sempre o Camel Case no JavaScript!

// JavaScript possui tipagem dinâmica: infere os tipos de dados
// JavaScript possui uma tipagem fraca

var nomeDoProfessor = "Paulo Alvares"; // string (texto): Utilize sempre aspas
var idade = 27; // number
var altura = 1.77; // number
var estudando = true; // boolean (booleano: verdadeiro ou falso)

console.log(nomeDoProfessor, typeof nomeDoProfessor);

console.log(idade, typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // declarando uma variável

console.log(semConteudo);

var curso = "Front-end em React",
  topico = "JavaScript Básico I";

console.log(curso, topico);

// ! Não utilize o var nos seus códigos JavaScript

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// ! mediaDoAluno = 5; Não é permitido!

console.log(notaDoAluno);
console.log(mediaDoAluno);

