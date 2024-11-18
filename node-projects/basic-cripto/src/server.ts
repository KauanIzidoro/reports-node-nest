// Importar o módulo HTTP
import http from 'http';
import user_password1 from './hash';

const PORT: number = 3000;

// 1. Processar requisições (req) e enviar respostas (res)
// 2. Criar um servidor com o requestHandler
// 3. Iniciar o servidor e escutar requisições na porta

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse): void => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(user_password1);
};


const server: http.Server = http.createServer(requestHandler);


server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
