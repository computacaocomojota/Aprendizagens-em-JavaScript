import express from "express";
import AutorController from "../controllers/autorController.js"

const routers = express.Router();

routers.get("/autores", AutorController.listarAutores);
routers.get("/autores/:id", AutorController.listarAutorId);
routers.post("/autores", AutorController.criarAutor);
routers.put("/autores/:id", AutorController.atualizarAutor);
routers.delete("/autores/:id", AutorController.deletarAutor);

export default routers;