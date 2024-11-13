## Anotações referentes aos estudos sobre NestJS e NodeJS

> [Kauan H. S. Izidoro](www.linkedin.com/in/kauanizidoro)

<div style="display: inline-flex; justify-content: center;">
  <a href="http://nestjs.com/" target="_blank" style="margin-left: 160px">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
  <a href="http://nestjs.com/" target="_blank" style="margin-left: 20px;">
    <img src="img/icons8-nodejs-480.svg" width="120" alt="Node Logo" />
  </a>
</div>


<!-- [circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest -->

<!-- <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a> -->


## Introdução 

[Nest](https://nestjs.com/) é um `framework` criado sobre o `NodeJS`, inspirado em frameworks como `Angular`, `Spring(Java)` e `ASP.NET`. Ele é construído com `TypeScript`, embora suporte também `JavaScript`.

Baseia-se na `Injeção de Dependências`, utiliza padrões de projeto como `MVC` e é altamente modular. Isso o torna adequado para aplicações empresariais e escaláveis, promovendo uma arquitetura sofisticada e consistente. 

Fornece uma estrutura robusta para o desenvolvimento, incluindo suporte nativo para módulos, serviços, interceptores, filtros e middlewares. Também integra bem com bibliotecas e frameworks de terceiros e inclui uma camada de abstração para facilitar o desenvolvimento de `APIs GraphQL`, `RESTful` e microserviços.


[Node](https://nodejs.org/en) é um ambiente de execução `JavaScript` que funciona server-side. É baseado em um modelo de eventos assíncronos e de I/O não bloqueante, o que o torna muito eficiente para aplicações que precisam lidar com muitas requisições simultâneas tal como `APIs RESTful`.

`NodeJS` fornece apenas funcionalidades básicas de sistemas, como manipulação de arquivos, requisições `HTTP`, manipulação de processos, etc. Isso significa que você escolher `frameworks` adicionais para construir aplicações mais sofisticadas. Oferece flexibilidade para estruturar a aplicação como desejar, o que exige mais decisões de design e arquitetura do desenvolvedor. 

