const express = require("express");
const router = express.Router();
const filmeController = require("../controller/FilmesController");

// Listar todos os filmes
router.get("/", filmeController.getFilmes);

// Localizar um filme por ID
router.get("/:id", filmeController.getFilmeById);

// Adicionar um novo filme
router.post("/submit", filmeController.createFilme);

// Atualizar um filme por ID
router.put("/edit/:id", filmeController.updateFilme);

// Buscar filmes por diretor
router.get("/diretor/:diretor", filmeController.getFilmesByDiretor);

// Rota para buscar filmes por gênero
router.get("/genero/:genero", filmeController.getFilmesByGenero);

// Excluir um filme por ID
router.delete("/delete/:id", filmeController.deleteFilme);

module.exports = router;


