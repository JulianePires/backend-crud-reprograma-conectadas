const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  poster: {
    type: String, 
  },
  sinopse: {
    type: String,
  },
  imdb: {
    type: String, 
  },
});

const Filme = mongoose.model("Filmes", filmeSchema);

module.exports = Filme
