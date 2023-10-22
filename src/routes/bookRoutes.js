const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");

// Listar todos os livros
router.get("/", bookController.getBooks);

// Localizar um livro por ID
router.get("/:id", bookController.getBookById);

// Adicionar um novo livro
router.post("/submit", bookController.createBook);

// Atualizar um livro por ID
router.put("/edit/:id", bookController.updateBook);

// Excluir um livro por ID
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;

