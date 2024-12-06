# NestJS Projects

Para criar um novo projeto `NestJS` execute o seguinte comando:

Obs.: Projetos em `NestJS` precisam usar `TypeScript` 

```bash
nest new <project_name>
```
Estrutura básica de um projeto `NestJS`:

```bash
<project-name>/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── node_modules/
├── package.json
├── tsconfig.json
└── .eslintrc.js
```

## Conceitos existentes no framework

- `Nest` é `TypeScript` first, oque significa que todo o código deve ser escrito em `Typescript`.

### 1. Módulos

Os módulos são blocos organizacionais em `NestJS`. Eles agrupam componentes relacionados como 'Controllers', 'Services', 'Providers', etc.


```TypeScript
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

### 2. Controllers

Os `controllers` lidam com as requisições HTTP e retornam as respostas apropriadas. Eles recebem os dados das requisições e delegam a lógica de negócios para os serviços.

```TypeScript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
```

### 3. Services

Os `services` encapsulam a lógica de negócios da aplicação e são geralmente injetados em controladores ou outros serviços.

```TypeScript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): string[] {
    return ['User1', 'User2', 'User3'];
  }
}
```
### 4. Decorators

Decoradores são usados para adicionar metadados às classes e seus membros. Alguns dos principais decoradores do `NestJS` incluem `@Module`, `@Controller`, `@Injectable`, `@Get`, `@Post`, entre outros.


