const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating the schema so mongoose knows how to structure our data
const book = new Schema({
  bookTitle: { type: String, required: true },
  bookSubtitle: { type: String },
  authors: { type: [String], required: true },
  linkToBook: { type: String, required: true },
  summary: { type: String, required: true },
  pictoral: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// creating the model
const BookInfo = mongoose.model("Book", book);

// exporting the file
module.exports = BookInfo;
