# DevTools 

Este relatório possui ferramentas `CLI` para aprimorar o desenvolvimento em `NodeJS` e `NestJS`

## NVM - Node Version Manager 

O `Node Version Manager (NVM)`, é uma ferramenta para gerenciar versões do Node em sua máquina.

Diferente projetos em seu ambiente local podem estar usando diferentes versões
 do Node. Usar apenas uma versão (aquela instalada pelo npm) para esses diferentes projetos pode não fornecer resultados de execução precisos.

### Como instalar (Linux/Ubuntu)


- Execute o seguinte comando: 

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# or

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- Atualize a sua configuração do shell:

Nesta etapa você deve adicionar o seguinte código no arquivo de configuração do shell, geralmente localizado em `~/.bashrc` ou `~/.zshrc`:


```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

- Reinicie o shell

```bash
source ~/.bashrc
#or
source ~/.zshrc
```

## npm - Node Package Manager

O `npm` é o gerenciador de pacotes do `Node.js`. E também é a ferramenta que pode ser usada para executar scripts e tarefas em projetos `Node`.

Um comando muito importante do `npm` é o `npm init -y` que inicia um novo projeto Node.

