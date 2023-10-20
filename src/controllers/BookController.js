const service = require("../services/BookService");
const mongoose = require("mongoose");

// Listar todos os livros
const getBooks = async (req, res) => {
  const books = await service.getBooks();

  if (books.length === 0) {
    res.status(204).send({ message: "Sem livros cadastrados" });
  } else {
    res.status(200).send(books);
  }
};

// Obter um livro por ID
const getBookById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "Id é inválido, verifique a informação!" });
    return;
  }
  const book = await service.getById(id);
  if (!book) {
    res.status(404).send({ message: "Livro não foi encontrado!" });
    return;
  }
  res.send(book);
};

// Criar um novo livro
const createBook = async (req, res) => {
  try {
    const newBook = await service.create(req.body);
    res.status(201).send(newBook);
  } catch (error) {
    res.status(400).send({ message: "Falha ao criar um novo livro", error: error.message });
  }
};

// Atualizar um livro por ID
const updateBook = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "Id é inválido, verifique a informação!" });
    return;
  }

  const updatedBook = await service.updateById(id, req.body);

  if (!updatedBook) {
    res.status(404).send({ message: "Livro não foi encontrado!" });
  } else {
    res.send(updatedBook);
  }
};

// Excluir um livro por ID
const deleteBook = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "Id é inválido, verifique a informação!" });
    return;
  }

  const deletedBook = await service.deleteById(id);

  if (!deletedBook) {
    res.status(404).send({ message: "Livro não foi encontrado!" });
  } else {
    res.send({ message: "Livro excluído com sucesso." });
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
