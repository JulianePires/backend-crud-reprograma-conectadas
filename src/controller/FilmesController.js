const service = require("../services/filmeService");
const mongoose = require("mongoose");


// Listar todos os filmes existentes

const getFilmes = async (req, res) => {
  const filmes = await service.getFilmes();

  if (filmes.length === 0) {
    res.status(204).send({ message: "Não há filmes cadastrados." });
  } else {
    res.status(200).send(filmes);
  }
};

// Localizar um filme por ID

const getFilmeById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "O Id do filme é inválido. Por favor, insira o Id correto." });
    return;
  }
  const filme = await service.getById(id);
  if (!filme) {
    res.status(404).send({ message: "O filme não foi encontrado. Por favor, verifique se o Id está correto e tente novamente." });
    return;
  }
  res.send(filme);
};

// Cadastrar um novo filme

const createFilme = async (req, res) => {
  try {
    const newFilme = await service.create(req.body);
    res.status(201).send(newFilme);
  } catch (error) {
    res.status(400).send({ message: "Falha ao cadastrar o novo filme. Por favor, tente novamente.", error: error.message });
  }
};

// Atualizar um filme por ID

const updateFilme = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "O Id do filme é inválido. Por favor, insira o Id correto." });
    return;
  }

  try {
    const updatedFilme = await service.updateById(id, req.body);

    if (!updatedFilme) {
      res.status(404).send({ message: "O filme não foi encontrado. Por favor, verifique se o Id está correto e tente novamente." });
    } else {
      res.send({ message: "Filme atualizado com sucesso.", filme: updatedFilme });
    }
  } catch (error) {
    res.status(500).send({ message: "Erro interno ao processar a requisição.", error: error.message });
  }
};


// Buscar filmes por diretor

const getFilmesByDiretor = async (req, res) => {
  const diretor = req.params.diretor;
  const filmes = await service.getFilmesByDiretor(diretor);

  if (filmes.length === 0) {
    res.status(204).send({ message: "Nenhum filme encontrado para o diretor informado." });
  } else {
    res.status(200).send(filmes);
  }
};

// Buscar filmes por gênero

const getFilmesByGenero = async (req, res) => {
  const genero = req.params.genero;
  const filmes = await service.getFilmesByGenero(genero);

  if (filmes.length === 0) {
    res.status(204).send({ message: "Nenhum filme encontrado para o gênero informado." });
  } else {
    res.status(200).send(filmes);
  }
};


// Excluir um filme por ID

const deleteFilme = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "O Id do filme é inválido. Por favor, insira o Id correto." });
    return;
  }

  const deletedFilme = await service.deleteById(id);

  if (!deletedFilme) {
    res.status(404).send({ message: "O filme não foi encontrado. Por favor, verifique se o Id está correto e tente novamente" });
  } else {
    res.send({ message: "O filme excluído com sucesso." });
  }
};

module.exports = {
  getFilmes,
  getFilmeById,
  createFilme,
  updateFilme,
  getFilmesByDiretor,
  getFilmesByGenero,
  deleteFilme,
};