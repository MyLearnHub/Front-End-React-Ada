let numero = 20; // Inferência de tipo

const pi = 3.1415;

let nome: string = "Paulo";

let correta: boolean = true;

let resultado = numero * pi;

// number[] ou Array<number>
const numeros: number[] = [1, 2, 3, 4, 5];

// ! const misto: (number | string)[] = ["Paulo", 20, 1.75];
// ! const misto: any[] = ["Paulo", 20, 1.75, {}, () => {}, true];
// ! Evite ao máximo utilizar o any!

const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menoresDeIdade = idades.filter((idade) => idade < 18);

console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ["Paulo", 20];

// Object Types

// interface
// tipo customizado
/*
  interface Person {
    nome: string;
    idade: number;
    profissao?: string;
    altura: number;
  }
*/

type Person = {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
};

const pessoa: Person = {
  nome: "Paulo",
  idade: 20,
  altura: 1.75,
};

pessoa.profissao = "Desenvolvedor";

console.log(pessoa);

type Criterio = "greater" | "lower";

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "lower");

console.log("numeroEscolhido:", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

// * Utility Types: A ideia deles é permitir que você crie novos tipos a partir
// * de tipos já existentes

// 1. Partial - Torna todos os atributos do objeto opcionais

type PersonPartial = Partial<Person>;

// 2. Required - Torna todos os atributos do objeto obrigatórios

type PersonRequired = Required<Person>;

// 3. Pick - Permite escolher quais atributos do objeto serão obrigatórios

type PersonPick = Pick<Person, "nome" | "idade">;

// 4. Omit - Permite escolher quais atributos do objeto serão omitidos

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude - Permite escolher quais atributos do objeto serão Excludeidos

type CriterioExclude = Exclude<Criterio, "greater">;

// 6. Record - Cria um tipo chave: valor

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  "123.456.789-00": {
    nome: "Fulano",
    idade: 20,
    altura: 1.8,
  },
  "123.456.789-01": {
    nome: "Fulana",
    idade: 19,
    altura: 1.72,
  },
};
