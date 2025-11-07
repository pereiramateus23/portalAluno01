<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

    
  # Portal do Aluno — API Backend
Este projeto é um backend de autenticação e gerenciamento de alunos, desenvolvido com o framework NestJS, MongoDB e JWT (JSON Web Token).
O sistema permite o cadastro de usuários (alunos), login com autenticação segura, redefinição de senha e acesso a rotas protegidas como o painel do aluno.

  ## Tecnologias Utilizadas

- NestJS → Framework Node.js baseado em módulos e injeção de dependências.

- TypeScript → Linguagem com tipagem forte para maior segurança no código.

- MongoDB + Mongoose → Banco de dados não relacional e ODM para mapeamento dos dados.

- JWT (JSON Web Token) → Autenticação via token para segurança das rotas.

- bcrypt → Criptografia das senhas dos usuários.

- class-validator / class-transformer → Validação dos dados recebidos pelo backend.

 ## Estrutura do Projeto
src/
├── app.module.ts               # Módulo raiz que importa todos os outros
├── main.ts                     # Arquivo principal para iniciar a aplicação
│
├── users/                      # Módulo responsável pelos usuários
│   ├── users.module.ts
│   ├── users.controller.ts
│   ├── users.service.ts
│   ├── dto/
│   │   └── create-user.dto.ts  # Define o formato dos dados de cadastro
│   └── schemas/
│       └── user.schema.ts      # Estrutura do documento no MongoDB
│
├── auth/                       # Módulo de autenticação e segurança
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   ├── jwt.strategy.ts         # Estratégia JWT de validação
│   ├── jwt-auth.guard.ts       # Guarda que protege as rotas privadas
│
└── aluno/                      # Módulo com rota protegida (dashboard)
    ├── aluno.module.ts
    ├── aluno.controller.ts


# Descrição dos Módulos

## UsersModule

Responsável por registrar novos usuários (alunos).

## Principais arquivos:

- users.controller.ts: Recebe as requisições HTTP.

- users.service.ts: Faz a lógica de criação do usuário.

- user.schema.ts: Define os campos no MongoDB (nome, email, senha, token de redefinição, etc).

As senhas são criptografadas com bcrypt antes de serem salvas no banco.

## AuthModule

Gerencia login, autenticação JWT e redefinição de senha.

## Principais arquivos:

- auth.controller.ts: Define as rotas /auth/login e /auth/reset-password.

- auth.service.ts: Valida as credenciais, gera tokens JWT e controla redefinições.

- jwt.strategy.ts: Configura como o NestJS valida o token.

- jwt-auth.guard.ts: Protege rotas privadas, verificando se o token é válido.

## AlunoModule

Simula uma área restrita, acessível apenas com autenticação.

## Principais arquivos:
- aluno.controller.ts: Possui a rota /aluno/dashboard, protegida por JwtAuthGuard.
Exemplo de retorno:
{
  "mensagem": "Bem-vindo, teste@teste.com!",
  "usuario": "690ce9d8117e0aacab924fdc"
}

# Como funciona a Autenticação

## Cadastro (POST /users/register)
O aluno envia nome, email e senha.
O backend salva o usuário no MongoDB com a senha criptografada.

## Login (POST /auth/login)
O usuário informa email e senha.
Se estiver correto, o sistema gera um token JWT.

## Acesso protegido (GET /aluno/dashboard)
Para acessar esta rota, o usuário precisa enviar o token no header
Authorization: Bearer <seu_token_aqui>

E O backend valida o token e retorna os dados do usuário logado.
Etapa  Método | Rota | Corpo (JSON) | 

#  Banco de Dados (MongoDB)

Banco: portalAluno01
Coleção: users

## Estrutura do documento:
{
  "_id": "690ce9d8117e0aacab924fdc",
  "nome": "Aluno Teste",
  "email": "teste@teste.com",
  "senha": "$2b$10$xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "resetToken": null,
  "resetTokenExpiration": null,
  "__v": 0
}

# Segurança

- Senhas criptografadas com bcrypt.

- Autenticação JWT — apenas quem tem token válido acessa áreas restritas.

- Validação de dados — via class-validator.

- Proteção contra tokens expirados — expiração configurada em 1 hora.

# Boas Práticas Implementadas

- Separação de módulos (Users, Auth, Aluno)
- Uso de DTOs e validações
- Injeção de dependências via NestJS
- Middleware de autenticação JWT
- Mensagens de erro claras e padronizadas
- Código limpo e escalável

# Como rodar: 
##  Clonar o repositório
git clone https://github.com/seu-usuario/portalAluno01.git

## Instalar as dependências
npm install

## Rodar o servidor em modo de desenvolvimento
npm run start:dev


# Autor
Nome: Mateus Pereira da Rosa
Projeto: Portal do Aluno — NestJS + MongoDB + JWT
Disciplina: Desenvolvimento Backend com Node.js
Professor: Henrique
 

