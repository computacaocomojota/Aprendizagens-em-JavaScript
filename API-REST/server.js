import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de Node.js",
  "/livros": "Entrei na Rota de Livros",
  "/autores": "Entrei na Rota de Autores"
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
})

server.listen(PORT, () => {
  console.log("App running!")
})
