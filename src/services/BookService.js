const Book = require("../infra/database/models/Book");

// Função para listar todos os livros
const getBooks = async () => {
  return await Book.find();
};

// Função para obter um livro por ID
const getById = async (id) => {
  return await Book.findById(id);
};

// Função para criar um novo livro
const create = async (data) => {
  return await Book.create(data);
};

// Função para atualizar um livro por ID
const updateById = async (id, data) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

// Função para excluir um livro por ID
const deleteById = async (id) => {
  return await Book.findByIdAndRemove(id);
};

module.exports = {
  getBooks,
  getById,
  create,
  updateById,
  deleteById,
};

