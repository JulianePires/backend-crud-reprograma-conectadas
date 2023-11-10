const Filme = require("../infra/database/models/filmesModel");

// Função para listar todos os filmes
const getFilmes = async () => {
  return await Filme.find();
};

// Função para obter um filme por ID
const getById = async (id) => {
  return await Filme.findById(id);
};

// Função para cadastrar um novo filme
const create = async (data) => {
  return await Filme.create(data);
};

// Função para atualizar um filme por ID
const updateById = async (id, data) => {
  return await Filme.findByIdAndUpdate(id, data, { new: true });
};

// Função para buscar filmes por diretor
const getFilmesByDiretor = async (diretor) => {
  return await Filme.find({ diretor: diretor });
};

// Função para buscar filmes por gênero
const getFilmesByGenero = async (genero) => {
  return await Filme.find({ genero: genero });
};

// Função para excluir um filme por ID
const deleteById = async (id) => {
  return await Filme.findByIdAndRemove(id);
};

module.exports = {
  getFilmes,
  getById,
  create,
  updateById,
  getFilmesByDiretor,
  getFilmesByGenero,
  deleteById,
};



