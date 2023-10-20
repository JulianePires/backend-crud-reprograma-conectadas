const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  uid: {
    type: String,
    unique: true
  },
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  gender: {
    type: String,
    required: [true, "Gender is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  isbn: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid ISBN!`,
    }
  },
  cover: {
    type: String,
    required: [true, "Cover is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

