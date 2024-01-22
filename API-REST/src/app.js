import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./routers/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
})

conexao.once("open", () => {
  console.log("Conexão com o Banco feita com sucesso!")
})

const app = express();
routes(app);

/*
app.delete("/livros/:id", async (req, res) => {
  return res.status(200).send("livro removido com sucesso");
});
*/

export default app;