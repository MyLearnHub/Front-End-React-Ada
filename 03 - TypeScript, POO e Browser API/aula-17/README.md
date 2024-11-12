# Configuração do TypeScript

1. Inicializar um projeto Node.js: npm init
2. Instalar o TypeScript
  2.1. Instalação global: `npm install -g typescript`
  2.2. Instalação local (dentro do projeto): `npm install typescript -D` 
3. Utilizar o TypeScript instalado para transpilar o nosso código (converter nosso código TS para JS)
  3.1. Testar o processo de compilação (com flag para atualização contínua): `npx tsc index.ts --watch`
  3.2. Iniciar o TypeDcript (arquivo tsconfig): `npx tsc --init`
  3.3. Só o comando `npx tsc` já compila todos os arquivos TS do projeto