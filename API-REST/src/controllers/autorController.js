import { Autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {

    try {

      const autor = await Autor.find({});
      return res.status(200).json(autor);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na requisição` });
    }
  };

  static async listarAutorId(req, res, id) {

    try {

      const id = req.params.id;
      const autor = await Autor.findById(id);
      return res.status(200).json(autor);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na requisição` });
    }
  }
  static async criarAutor(req, res) {

    try {

      const autor = await Autor.create(req.body);
      return res.status(201).json({

        message: "Criado com sucesso!",
        novoAutor: autor

      });

    } catch (erro) {

      res.status(500).json({
        message: `${erro.message} - Falha ao 
      Cadastrar Autor` });
    }
  }

  static async atualizarAutor(req, res) {

    try {

      const id = req.params.id;
      const autor = await Autor.findByIdAndUpdate(id, req.body);
      return res.status(200).json(autor);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha na atualização` });
    }

  }

  static async deletarAutor(req, res) {

    try {

      const id = req.params.id;
      const autor = await Autor.findByIdAndDelete(id);
      res.status(200).json(autor);
    } catch (erro) {

      return res.status(500).json({ message: `${erro.message} - Falha em deletar o autor` });
    }
  }


};

export default AutorController;