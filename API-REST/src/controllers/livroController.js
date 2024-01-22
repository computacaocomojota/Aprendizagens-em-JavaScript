import Livro from "../models/Livro.js";
import { Autor } from "../models/Autor.js";

class LivroController {

  static async listarLivros(req, res) {

    try {

      const livro = await Livro.find({});
      return res.status(200).json(livro);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na requisição` });
    }
  };

  static async listarLivrosId(req, res, id) {

    try {

      const id = req.params.id;
      const livro = await Livro.findById(id);
      return res.status(200).json(livro);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na requisição` });
    }
  }
  static async criarLivro(req, res) {

    const livro = req.body;
    try {

      const autor = await Autor.findById(livro.autor)
      const livroCompleto = { ...livro, autor: { ...autor._doc } };
      const livroCriado = await Livro.create(livroCompleto);
      return res.status(201).json({

        message: "Criado com sucesso!",
        novoLivro: livroCriado

      });

    } catch (erro) {

      res.status(500).json({
        message: `${erro.message} - Falha ao 
      Cadastrar Livro` });
    }
  }

  static async atualizarLivro(req, res) {

    try {

      const id = req.params.id;
      const livro = await Livro.findByIdAndUpdate(id, req.body);
      return res.status(200).json(livro);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na atualização` });
    }

  }

  static async deletarLivro(req, res) {

    try{

      const id = req.params.id;
      const livro = await Livro.findByIdAndDelete(id);
      res.status(200).json(livro);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha em deletar o livro` });
    }
  }

  static async listarLivrosPorEditora(req,res){

    const editora = req.query.editora;

    try{

      const livroPorEditora = await Livro.find({editora: editora});
      return res.status(200).json(livroPorEditora);
    } catch(erro){

      return res.status(500).json({message: `${erro.message} - Falha na busca`});
    }
  }

};

export default LivroController;