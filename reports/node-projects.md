# NodeJS Projects

### Setup para aplicações Node com [TypeScript](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

Este passo-a-passo requer um ambiente de desenvolvimento Linux.

#### 1. Certifique-se de ter o `Node` e o `npm` instalados.

```bash
node -v
npm -v 
```
#### 2. Inicialize o projeto

```bash
mkdir <folder_name>
cd <folder_name>
npm init -y # use este comando para gerar o arquivo 'package.json'
```

#### 3. Instale as dependências 

```bash
npm install express
npm install typescript ts-node @types/node @types/express --save-dev
```

#### 4. Inicialize o TypeScript

```bash
npx tsc --init # use este comando para gerar o arquivo 'tsconfig.json'
```

###### 4.1. Configure o arquivo `tsconfig.json`

Crie a pasta `src/` para armazenar os arquivos de código-fonte escritos em TypeScript:

```bash
mkdir src ; touch src/index.ts
```

```json
{
    "compilerOptions": {
        "outDir": "./dist", # diretório de saída para salvar os arquivos .js
        "rootDir": "./src"
    }
}
```

#### 5. Configure um servidor `Express`:

Adicione o seguinte código no arquivo `src/index.ts`:

```javascript
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```
#### 6. Instale e Configure o Nodemon

```bash
npm install nodemon --save-dev # reinicie o servidor automaticamente
```
Adicione o seguinte script no arquivo `package.json`: 

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "nodemon --exec ts-node src/index.ts"
}
```
#### 7. Compile e Execute 

Para compilar e rodar o projeto, use o seguintes comandos:

```bash
npx tsc # compila o código
npm run dev # roda o servidor
```


