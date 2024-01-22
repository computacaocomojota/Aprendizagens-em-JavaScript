import express from "express";
import LivroController from "../controllers/livroController.js"

const routers = express.Router();

routers.get("/livros",LivroController.listarLivros);
routers.get("/livros/buscar",LivroController.listarLivrosPorEditora);
routers.get("/livros/:id",LivroController.listarLivrosId);
routers.post("/livros",LivroController.criarLivro);
routers.put("/livros/:id",LivroController.atualizarLivro);
routers.delete("/livros/:id",LivroController.deletarLivro);

export default routers;