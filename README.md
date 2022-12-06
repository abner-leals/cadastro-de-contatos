# Calculo de Antecipação

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/abner-leals/cadastro-de-contatos/blob/react/LICENSE)

Sobre o projeto

Cadastro de Contatos é uma aplicação fullStack, web e mobile construída durante o teste conhecimento de frontend no **Módulo 6** (s4-01), do curso FullStack da [Kenzie Academy Brasil](https://kenzie.com.br "Site da Kenzie Academy Brasil").

A aplicação consiste em uma simulação de antecipação de parcelas, onde os dados são coletados, e depois são calculados e listados os valores mediante ao período informado.

# Tecnologias utilizadas

## Front end

- HTML / CSS / JS / TypeScript
- ReactJS
  -Styled Components

## Back end

- Nodejs / Express / Typeorm / TypeScript

# Como executar o projeto

É nescessário ter instaldo o yarn e/ou npx

execute o comando yarn para baixar as dependencias no computador

caso ainda não tenha criado o banco de dados configure o .env e execute o comando yarn db:create
caso queira dropar yarn db:drop
e para recriar yarn db:recreate

inicie as migrations com o comando yarn typeorm migration:run -d api/data-source.ts

para iniciar a api execute o comando yarn api

#### Para acessar a documentação entre na pasta insomnia-final-result

rode o comando npx serve
