// Selecionar elementos HTML da nossa página utilizando o document

// 1. pelo nome da tag
const todosP = document.getElementsByTagName("p");

console.log(todosP);

// 2. Pelo nome da classe
const todosClasseParagrafo = document.getElementsByClassName("paragrafo");

console.log(todosClasseParagrafo);

// 3. Pelo name da tag
const emailInput = document.getElementsByName("email");

console.log(emailInput);

// 4. Pelo id da tag
const jsLogoImg = document.getElementById("js-logo");

console.log(jsLogoImg);

// 5. Query Selector
const imagem = document.querySelector("body > img#js-logo");

console.log(imagem);

const paragrafos = document.querySelectorAll("p");

console.log(paragrafos);

console.clear();

// Acessando/alterando o conteúdo HTML das tags

const primeiroParagrafo = document.querySelector("p.paragrafo");

console.log(primeiroParagrafo);

console.log("textContent:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.innerHTML = "<strong>Outra coisa</strong>";

console.clear();

emailInput[0].value = "paulo@email.com";

console.log(emailInput.value);

// Criando elementos na página HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement("li"); // criando uma tag li vazia
novaTagLi.textContent = "Segundo item"; // adicionando um texto dentro da tag li

console.log(novaTagLi);

// listaUl.appendChild(novaTagLi);

listaUl.insertBefore(novaTagLi, listaLis[1]);

listaUl.removeChild(listaLis[0]);
